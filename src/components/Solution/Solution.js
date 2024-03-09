import React from 'react'
import { Table } from "antd"
import "./solution.css"

function Solution(props) {
    const { showSolution, inputText } = props

    function modifyResult(obj) {
        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key] ? "T" : "F";
            }
        }
        return newObj;
    }
    function generateTruthTable(expression) {
        const variables = expression.match(/[A-Z]/g);
        const numRows = Math.pow(2, variables.length);
        const truthTable = [];
        for (let i = 0; i < numRows; i++) {
            const row = {};
            for (let j = 0; j < variables.length; j++) {
                const variable = variables[j];
                row[variable] = !!(i & (1 << (variables.length - 1 - j)));
            }
            row["P"] = evaluateExpression(expression, row);
            let modified = modifyResult(row);
            modified["No."] = Number(i) + 1;
            truthTable.push(modified);
        }

        return truthTable;
    }


    function evaluateExpression(expression, row) {
        const variables = expression.match(/[A-Z]/g);
        let evaluatedExpression = expression;

        for (let i = 0; i < variables.length; i++) {
            const variable = variables[i];
            evaluatedExpression = evaluatedExpression.replace(new RegExp(variable, 'g'), row[variable]);
        }

        const result = eval(evaluatedExpression);
        return result == 0 ? false : true;
    }

    const getPredicate = () => {
        let result = generateTruthTable(inputText);
        const columns = [
            {
                title: "No.",
                dataIndex: "No.",
                key: "No.",
            },
            ...Object.keys(result[0]).map(key => ({
                title: key,
                dataIndex: key,
                key: key,
            })).filter(col => col.key !== "No.")
        ];
        result = result
            .filter(e => e.P === "T")
            .map((e, index) => ({ ...e, "No.": index + 1 }));
        return (
            <Table
                dataSource={result}
                columns={columns}
                pagination={false}
            />
        );


        return <div>p</div>
    }
    const getCombinational = () => {
        let result = generateTruthTable(inputText);
        const columns = [
            {
                title: "No.",
                dataIndex: "No.",
                key: "No.",
            },
            ...Object.keys(result[0]).map(key => ({
                title: key,
                dataIndex: key,
                key: key,
            })).filter(col => col.key !== "No.")
        ];

        return (
            <Table
                dataSource={result}
                columns={columns}
                pagination={false}
            />
        );
    }
    const getActive = () => {
        return <div>a</div>
    }


    const getFormattedSolution = () => {
        if (showSolution == "predicate") {
            return getPredicate()
        }
        else if (showSolution == "combinational") {
            return getCombinational()
        }
        else if (showSolution == "active") {
            return getActive()
        }
        else {
            return ""
        }
    }

    return (
        <div>
            <div>Result...</div>
            {showSolution ?
                <div className='resultDiv'>
                    {getFormattedSolution()}
                </div>
                : null
            }
            {showSolution ?
                <div className='lastDiv'>

                </div>
                : null
            }
        </div>
    )
}

export default Solution
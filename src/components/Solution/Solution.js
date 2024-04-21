import React from "react";
import { Table } from "antd";
import "./solution.css";

function Solution(props) {
  const { showSolution, inputText } = props;

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
      evaluatedExpression = evaluatedExpression.replace(
        new RegExp(variable, "g"),
        row[variable]
      );
    }

    const result = eval(evaluatedExpression);
    return result === 0 ? false : true;
  }

  const getPredicate = () => {
    let result = generateTruthTable(inputText);
    const columns = [
      {
        title: "No.",
        dataIndex: "No.",
        key: "No.",
      },
      ...Object.keys(result[0])
        .map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
        .filter((col) => col.key !== "No."),
    ];

    let trueObjects = result.filter((obj) => obj["P"] === "T");
    let falseObjects = result.filter((obj) => obj["P"] === "F");

    result = [
      trueObjects.length > 0 ? trueObjects[0] : {},
      falseObjects.length > 0 ? falseObjects[0] : {},
    ];
    result = result.map((e, index) => ({ ...e, "No.": index + 1 }));
    return (
      <div data-testid="acive-div-solution">
        <Table
          rowKey={(record) => record["No."]}
          dataSource={result}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  };
  const getCombinational = () => {
    let result = generateTruthTable(inputText);
    const columns = [
      {
        title: "No.",
        dataIndex: "No.",
        key: "No.",
      },
      ...Object.keys(result[0])
        .map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
        .filter((col) => col.key !== "No."),
    ];

    return (
      <div data-testid="acive-div-solution">
        <Table
          rowKey={(record) => record["No."]}
          dataSource={result}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  };

  const checkKeys = (r1, r2, allKeys, key) => {
    let filterKeys = allKeys.filter(
      (k) => k !== "No." && k !== "P" && k !== key
    );
    if (r1["P"] !== r2["P"] && r1[key] !== r2[key]) {
      for (let k of filterKeys) {
        if (r1[k] !== r2[k]) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  };

  const getConsolidatedData = (data) => {
    const allKeys = Object.keys(data[0]);
    let keysToUse = allKeys
      .filter((key) => key !== "No." && key !== "P")
      .map((key) => ({ key, val: [], T: [], F: [] }));
    for (let i = 0; i < keysToUse.length; i++) {
      let key = keysToUse[i].key;
      for (let row of data) {
        if (row[key] === "T") {
          keysToUse[i].T.push(row);
        }
        if (row[key] === "F") {
          keysToUse[i].F.push(row);
        }
      }
      let count = 0;
      for (let r1 of keysToUse[i].T) {
        for (let r2 of keysToUse[i].F) {
          if (checkKeys(r1, r2, allKeys, key)) {
            count++;
            break;
          }
        }
      }
      keysToUse[i].val = count;
    }
    return keysToUse;
  };

  const getActive = () => {
    let result = generateTruthTable(inputText);
    let resultConsolatedData = getConsolidatedData([...result]);
    const columns = [
      {
        title: "No.",
        dataIndex: "No.",
        key: "No.",
      },
      ...Object.keys(result[0])
        .map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
        .filter((col) => col.key !== "No."),
    ];
    return (
      <div data-testid="acive-div-solution">
        {resultConsolatedData.map((obj, index) =>
          index === resultConsolatedData.length - 1 ? (
            <span key={index}>
              {obj.key} : {obj.val}
            </span>
          ) : (
            <span key={index}>
              {obj.key} : {obj.val},{" "}
            </span>
          )
        )}
        <Table
          rowKey={(record) => record["No."]}
          dataSource={result}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  };

  const getFormattedSolution = () => {
    if (showSolution === "predicate") {
      return getPredicate();
    } else if (showSolution === "combinational") {
      return getCombinational();
    } else if (showSolution === "active") {
      return getActive();
    } else {
      return "";
    }
  };

  return (
    <div>
      <div>Result...</div>
      {showSolution ? (
        <div className="resultDiv">{getFormattedSolution()}</div>
      ) : null}
      {showSolution ? <div className="lastDiv"></div> : null}
    </div>
  );
}

export default Solution;

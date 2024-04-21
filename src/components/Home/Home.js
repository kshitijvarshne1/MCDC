import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";
import { Input, Button, Radio, Space } from "antd";
import notification from "../Notification/CreateNotification";
import { InfoCircleOutlined } from "@ant-design/icons";
import Solution from "../Solution/Solution";

function Home() {
  const [inputText, setInputText] = useState("");
  const [criteria, setCriteria] = useState(0);
  const [showSolution, setSolution] = useState(false);

  const unique = (data) => {
    const charSet = new Set();
    for (let char of data.toUpperCase()) {
      if (charSet.has(char)) {
        return false;
      }
      if (char >= "A" && char <= "Z") {
        charSet.add(char);
      }
    }
    return true;
  };

  const handleSubmit = () => {

    if (!inputText || inputText.length === 0 || inputText.trim().length === 0) {
      notification("error", "Please enter the predicate");
      return;
    }
    const digitRegex = /\d/;
    if (digitRegex.test(inputText)) {
      notification("error", "Input text should not contain numerical digits");
      return;
    }

    const regex = /^[A-Z()|&]+$/;
    if (!regex.test(inputText)) {
      notification(
        "error",
        "Input text should contain only A-Z, (, ), |, and & characters"
      );
      return;
    }
    if (!unique(inputText)) {
      notification(
        "error",
        "Input text should contain only unique characters in case of characters"
      );
      return;
    }
    if (!criteria) {
      notification("error", "Please select the coverage criteria");
      return;
    }

    setSolution(criteria);
  };

  const onChange = (e) => {
    setCriteria(e.target.value);
    setSolution(false);
  };
  return (
    <div>
      <Navbar />
      <div className="fullDiv">
        <div>
          <h1>Enter the predicate</h1>
          <Input
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setSolution(false);
            }}
            placeholder="Enter characters(A-Z) or symbols ex: A | B"
          />
          <div className="infoDiv">
            <InfoCircleOutlined />
            <p className="infoP">
              Use '|' for logical OR and '&' for logical AND
            </p>
          </div>
          <div data-testid="select-criteria-div" className="selectCriteriaDiv">
            <Radio.Group data-testid="radio-group-id" onChange={onChange} value={criteria}>
              <Space direction="vertical">
                <Radio value={"predicate"}>Predicate Coverage</Radio>
                <Radio value={"combinational"}>Combinatorial Coverage</Radio>
                <Radio value={"active"}>Active Clause Coverage</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="buttonDiv">
            <Button type="primary" size="large" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <Solution showSolution={showSolution} inputText={inputText} />
        </div>
      </div>
    </div>
  );
}

export default Home;

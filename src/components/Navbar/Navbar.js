import React from "react";
import "./navbar.css";
import { Col, Row } from "antd";

function Navbar() {

  const handleHomeClick = () => {
    window.location.reload();
  };

  const handleHomeClick1 = () => {
    console.log("Sdsds");
    window.location.href = "/";
  };



  return (
    <div className="navDiv">
      <Row justify="end">
        <Col className="coverageCalculator" xs={12} xm={12} md={12} lg={12}>
          Logic Coverage
        </Col>
        <Col xs={12} xm={12} md={12} lg={12}>
          <div data-testid="xxDiv" className="home" onClick={handleHomeClick1}>
            Home
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;

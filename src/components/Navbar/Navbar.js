import React from "react";
import "./navbar.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <div className="navDiv">
      <Row justify="end">
        <Col className="coverageCalculator" xs={12} xm={12} md={12} lg={12}>
          Logic Coverage
        </Col>
        <Col xs={12} xm={12} md={12} lg={12}>
          <div className="home" onClick={handleHomeClick}>
            <Link to="/">Home</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;

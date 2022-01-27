import React from "react";
import {Col, Row } from "react-bootstrap";

const TravelExperience = () => {
  return (
    <div className="container-fluid">
      <Row>
              <Col md={6}>
          <Row>
            <Col md={4}>
                <div>
             <img src="https://www.thebrokebackpacker.com/wp-content/uploads/2021/04/backpacker-traps-will-motorbike-pakistan-1536x1024.jpg" alt="" />
                 </div>
            </Col>
            <Col md={8}>
              <h1>Backpacker Traps: The WORST Mistakes Travellers Make</h1>
            </Col>
        </Row>
              </Col>
              <Col md={6}>
                  Second Column
              </Col>
      </Row>
    </div>
  );
};

export default TravelExperience;

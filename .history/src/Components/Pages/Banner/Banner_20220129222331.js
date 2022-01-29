import React from 'react';
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_66-200x200.jpg";

const Banner = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Col>
            <img src={images1} alt="" />
          </Col>
                  <Col>
                      <p> EUROPE</p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
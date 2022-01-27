import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={6}>First Column</Col>
        <Col md={6}>Second Column</Col>
      </Row>
    </div>
  );
};

export default Blog;

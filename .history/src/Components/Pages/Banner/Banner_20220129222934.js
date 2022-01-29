import React from 'react';
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_66-200x200.jpg";
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-main'>
      <Row className='mt-3'>
        <Col className='d-flex' md={3}>
          <Col >
            <img className='banner-img' src={images1} alt="" />
          </Col>
          <Col>
            <p> EUROPE</p>
            <hp>African Nation Are Struggling To Save Their Wildlife </p>
            <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
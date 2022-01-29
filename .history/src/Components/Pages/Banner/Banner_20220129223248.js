import React from 'react';
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_66-200x200.jpg";
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner-main'>
      <Row className='mt-3'>
        <Col className='d-flex m' md={3}>
          <Col className='text-center mt-3' >
            <img className='banner-img' src={images1} alt="" />
          </Col>
          <Col className='text-size'>
            <p> EUROPE</p>
            <p className='fw-bold'>African Nation Are Struggling To Save Their Wildlife </p>
            <small className='m-0'> BY ADMIN</small> <small> JANUARY 21,2022</small>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
import React from 'react';
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_66-200x200.jpg";
import images2 from "../../../images/blog_23-200x200.jpg";
import images3 from "../../../images/blog_52-220x175.jpg";
import images4 from "../../../images/blog_60-160x117.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-main">
      <Row className="mt-3 container-f">
        <Col className="" md={3}>
          <Col className="text-size d-flex my-2 ">
            <img className="banner-img mt-3" src={images1} alt="" />
            <div className="ms-4">
              <p className="bg-danger text-light w-50 px-1 rounded mt-3 ">
                EUROPE
              </p>
              <p className="fw-bold">How to get the best deal</p>
              <div className="text-secondary">
                <small className="m-0"> BY ADMIN</small>{" "}
                <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Col>
        </Col>
        <Col className="" md={3}>
          <Col className="text-size d-flex my-2 ">
            <img className="banner-img mt-3" src={images1} alt="" />
            <div className="ms-4">
              <p className="bg-warning text-light w-50 px-1 rounded mt-3 ">
                AMERICA
              </p>
              <p className="fw-bold">How to get the best deal</p>
              <div className="text-secondary">
                <small className="m-0"> BY ADMIN</small>{" "}
                <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Col>
        </Col>
        <Col className="" md={3}>
          <Col className="text-size d-flex my-2 ">
            <img className="banner-img mt-3" src={images1} alt="" />
            <div className="ms-4">
              <p className="bg-success text-light w-50 px-1 rounded mt-3 ">
                CANADA
              </p>
              <p className="fw-bold">How to get the best deal</p>
              <div className="text-secondary">
                <small className="m-0"> BY ADMIN</small>{" "}
                <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Col>
        </Col>
        <Col className="" md={3}>
          <Col className="text-size d-flex my-2 ">
            <img className="banner-img mt-3" src={images1} alt="" />
            <div className="ms-4">
              <p className="bg-primary text-light w-50 px-1 rounded mt-3 ">
                AFRICA
              </p>
              <p className="fw-bold">How to get the best deal</p>
              <div className="text-secondary">
                <small className="m-0"> BY ADMIN</small>{" "}
                <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Col>
        </Col>
       
      </Row>
    </div>
  );
};

export default Banner;
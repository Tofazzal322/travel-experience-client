import React from 'react';
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_66-200x200.jpg";
import images2 from "../../../images/blog_23-200x200.jpg";
import images3 from "../../../images/";
import images4 from "../../../images/blog_66-200x200.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-main">
      <Row className="mt-3">
        <Col className="d-flex my-2" md={3}>
          <Col className="text-center mt-2">
            <img className="banner-img" src={images1} alt="" />
          </Col>
          <Col className="text-size">
             <p className="bg-primary text-light w-50 px-1 rounded mt-3 ">
                  Europe
                </p>
            <p className="fw-bold">How to get the best deal</p>
          <div className="text-secondary">
              <small className="m-0"> BY ADMIN</small>{" "}
              <small> JANUARY 21,2022</small>
            </div>
          </Col>
        </Col>
        <Col className="d-flex my-2" md={3}>
          <Col className="text-center mt-2">
            <img className="banner-img" src={images2} alt="" />
          </Col>
          <Col className="text-size">
             <p className="bg-primary text-light w-50 px-1 rounded mt-3 ">
                  Europe
                </p>
            <p className="fw-bold">How to get the best deal</p>
            <div className="text-secondary">
              <small className="m-0"> BY ADMIN</small>{" "}
              <small> JANUARY 21,2022</small>
            </div>
          </Col>
        </Col>
        <Col className="d-flex my-2" md={3}>
          <Col className="text-center mt-2">
            <img className="banner-img" src={images3} alt="" />
          </Col>
          <Col className="text-size">
             <p className="bg-primary text-light w-50 px-1 rounded mt-3 ">
                  Europe
                </p>
            <p className="fw-bold">How to get the best deal</p>
            <div className="text-secondary">
              <small className="m-0"> BY ADMIN</small>{" "}
              <small> JANUARY 21,2022</small>
            </div>
          </Col>
        </Col>
        <Col className="d-flex my-2" md={3}>
          <Col className="text-center mt-2">
            <img className="banner-img" src={images4} alt="" />
          </Col>
          <Col className="text-size">
             <p className="bg-primary text-light w-50 px-1 rounded mt-3 ">
                  Europe
                </p>
            <p className="fw-bold">How to get the best deal</p>
           <div className="text-secondary">
              <small className="m-0"> BY ADMIN</small>{" "}
              <small> JANUARY 21,2022</small>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
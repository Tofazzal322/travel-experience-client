import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_06.jpg";
import images2 from "../../../images/blog_62-200x200.jpg";
import images3 from "../../../images/blog_66-200x200.jpg";
import images4 from "../../../images/blog_23-200x200.jpg";

const Home = () => {
  return (
    <div className="container-fluid mt-5">
      <Row>
        <Col md={5}>
          <div>
            <div className="img-top">
              <img className="w-100 rounded" src={images1} alt="" />
              <p className="bg-primary text-light w-25 px-1 rounded mt-3 ">
                {" "}
                Europe
              </p>
              <h3>
                African Nation Are Struggling <br /> To Save Their Wildlife
              </h3>
              <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Row className="mb-2">
            <div className="d-flex">
              <div>
                <img className="rounded" src={images2} alt="" />
              </div>

              <div className="ms-3">
                <p className="bg-primary text-light w-25 px-1 rounded">Asia</p>
                <h3>
                  African Nation Are <br /> Struggling To Save <br />
                  Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Row>
          <Row className="mb-2">
            <div className="d-flex">
              <div>
                <img className="rounded" src={images3} alt="" />
              </div>

              <div className="ms-3">
                <p className="bg-danger text-light w-25 px-1 rounded">Africa</p>
                <h3>
                  African Nation Are <br /> Struggling To Save <br />
                  Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Row>
          <Row>
            <div className="d-flex">
              <div>
                <img className="rounded" src={images4} alt="" />
              </div>

              <div className="ms-3">
                <p className="bg-warning text-light w-25 px-1 rounded">
                  {" "}
                  Europe
                </p>
                <h3>
                  African Nation Are <br /> Struggling To Save <br />
                  Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Row>
        </Col>
              <Col md={3} className="">
                  <h1> </h1>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
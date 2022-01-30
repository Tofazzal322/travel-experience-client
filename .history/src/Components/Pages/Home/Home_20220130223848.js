import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_06.jpg";

import "./Home.css";
import Banner from "../Banner/Banner";
import HomeData from "./HomeData";

const Home = () => {
  const [data, setData] = useState([]);
  // console.log(data.imageAdd);

  useEffect(() => {
    fetch("http://localhost:5000/blogPost")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Banner></Banner>
      <div className="container-fluid mt-5 ">
        <Row>
          <Col md={5}>
            <div>
              <div className="img-top">
                <img className="w-100 rounded" src={images1} alt="" />
                <p className="bg-primary text-light w-25 px-1 rounded mt-3 ">
                  CANADA
                </p>
                <h3 className="p-md">
                  African Nation Are Struggling To Save Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Col>

          <Col md={5}>
           <HomeData
          </Col>
          <Col md={2} className="">
            <h5 className="text-primary fw-bold"> HOT CATEGORIES</h5>
            <div className="rounded categories-img">Animal</div>
            <div className="rounded categories-img mt-2">Food</div>
            <div className="rounded categories-img mt-2">Health</div>
            <div className="rounded categories-img mt-2">Sports</div>
            <div className="rounded categories-img mt-2">Tours</div>
            <div className="rounded categories-img mt-2">Travel</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

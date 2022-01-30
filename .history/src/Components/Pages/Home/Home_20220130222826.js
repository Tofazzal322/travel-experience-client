import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_06.jpg";
import images2 from "../../../images/blog_62-200x200.jpg";
import images3 from "../../../images/blog_66-200x200.jpg";
import images4 from "../../../images/blog_23-200x200.jpg";
import "./Home.css";
import Banner from "../Banner/Banner";

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
        {data.map((item) => (
          
        ))}
      </div>
    </>
  );
};

export default Home;

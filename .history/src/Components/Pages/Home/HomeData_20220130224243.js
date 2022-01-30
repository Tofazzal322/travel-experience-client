import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import images2 from "../../../images/blog_62-200x200.jpg";
import images3 from "../../../images/blog_66-200x200.jpg";
import images4 from "../../../images/blog_23-200x200.jpg";

const HomeData = () => {
  const [data, setData] = useState([]);
  // console.log(data.imageAdd);

  useEffect(() => {
    fetch("http://localhost:5000/blogPost")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container-fluid">
      {data.map((item) => (
        <Row className="mb-2">
          <div className="d-flex">
            <div>
              <img className="rounded" src={images2} alt="" />
            </div>

            <div className="ms-3">
                      <p className="bg-primary text-light w-25 px-1 rounded">{ item.location}</p>
                      <h5>{ item.title}</h5>
              <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
            </div>
          </div>
        </Row>
      ))}
    </div>
  );
};

export default HomeData;

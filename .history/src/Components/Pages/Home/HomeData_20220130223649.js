import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const HomeData = () => {
      const [data, setData] = useState([]);
  // console.log(data.imageAdd);

  useEffect(() => {
    fetch("http://localhost:5000/blogPost")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
       <div className="container-fluid mt-5 ">
    
          {data.map((item) => (
             <Row className="mb-2">
              <div className="d-flex">
                <div>
                  <img className="rounded" src={images2} alt="" />
                </div>

                <div className="ms-3">
                  <p className="bg-primary text-light w-25 px-1 rounded">
                    Asia
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
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
                  <p className="bg-danger text-light w-25 px-1 rounded">
                    Africa
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
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
                    Europe
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
                  <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
                </div>
              </div>
            </Row>
          ))}

          <Col md={5}>
            <Row className="mb-2">
              <div className="d-flex">
                <div>
                  <img className="rounded"  src={`data:image/jpeg;base64,${item.imageAdd}`} alt="" />
                </div>

                <div className="ms-3">
                  <p className="bg-primary text-light w-25 px-1 rounded">
                    Asia
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
                  <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
                </div>
              </div>
            </Row>
            <Row className="mb-2">
              <div className="d-flex">
                <div>
                  <img className="rounded"  src={`data:image/jpeg;base64,${item.imageAdd}`} alt="" />
                </div>

                <div className="ms-3">
                  <p className="bg-danger text-light w-25 px-1 rounded">
                    Africa
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
                  <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
                </div>
              </div>
            </Row>
            <Row>
              <div className="d-flex">
                <div>
                  <img className="rounded"  src={`data:image/jpeg;base64,${item.imageAdd}`} alt="" />
                </div>

                <div className="ms-3">
                  <p className="bg-warning text-light w-25 px-1 rounded">
                    Europe
                  </p>
                  <h5>African Nation Are Struggling To Save Their Wildlife</h5>
                  <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
                </div>
              </div>
            </Row>
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
    );
};

export default HomeData;
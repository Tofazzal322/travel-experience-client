import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import images1 from "../../../images/blog_06.jpg";
import images2 from "../../../images/blog_62-200x200.jpg";

const Home = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={images1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}

          <div>
            <div className="img-top">
              <img className="w-100" src={images1} alt="" />
            </div>
          </div>
        </Col>
        <Col>
          <Row className='mb-2'>
            <div className="d-flex">
              <div>
                <img src={images2} alt="" />
              </div>

             <div className="ms-3">
                <p> Europe</p>
                <h3>
                  African Nation Are <br /> Struggling To Save <br />
                  Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Row>
          <Row className=''>
            <div className="d-flex">
              <div>
                <img src={images2} alt="" />
              </div>

              <div className="ms-3">
                <p> Europe</p>
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
                <img src={images2} alt="" />
              </div>

              <div className="ms-3">
                <p> Europe</p>
                <h3>
                  African Nation Are <br /> Struggling To Save <br />
                  Their Wildlife
                </h3>
                <small> BY ADMIN</small> <small> JANUARY 21,2022</small>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
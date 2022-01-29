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
              <img src={images1} alt="" />
            </div>
          </div>
        </Col>
              <Col>
                  <Row>
                      <Col>
                          <img src={images2} alt="" />
                      </Col>
                      <Col>
                          <div>
                              <p> Europe</p>
                              <h3> African Nation Are Strugling To Save Their Wildlife</h3>
                          </div>
                      </Col>
                  </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
       <Card className="bg-dark text-white">
  <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtk4DRVc29DtWDIP9_AECquj-fHdEASRwDZA&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    );
};

export default Blog;
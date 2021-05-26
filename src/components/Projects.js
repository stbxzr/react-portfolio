import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Row from 'react-bootstrap/Row'

const Projects = () => {
  return (
      <Row className="justify-content-md-center">
    <CardGroup style={{ height: "20rem" }} bg="warning">
      <Card
        text="white"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/photos/old-fountain-pen-on-manuscript-picture-id462569549?k=6&m=462569549&s=612x612&w=0&h=zI3sp_3J59d6nmN1WtHVwkoYd2JAY5tHX6pOnjqTPK0=")`,
        }}
      >
        <Card.Img />
        <Card.Body>
          <Nav.Item>
          <Card.Title style={{ textDecorationLine: "underline" }}>
            Poetry Explore
          </Card.Title>
           
            <Button variant="success" href="https://cstuhlfire.github.io/PoetryProject/">
              Deploy To Application
            </Button>
      
          
            <Button href="https://github.com/stbxzr/PoetryProject">
              Project Repository
            </Button>
            
          </Nav.Item>
        </Card.Body>
      </Card>
      <Card
        text="white"
        style={{
          backgroundImage: `url("https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg")`,
        }}
      >
        <Card.Img/>
        <Card.Body>
          <Card.Title style={{ textDecorationLine: "underline" }}>
            Quizami
          </Card.Title>
          <Nav.Item>
          
            <Button variant="success" href="http://polar-headland-03677.herokuapp.com/login">
              Deploy To Application
            </Button>
        
            <Button href="https://github.com/stbxzr/PoetryProject">
              Project Repository
            </Button>
          </Nav.Item>
        </Card.Body>
      </Card>
      <Card
        text="white"
        style={{
          backgroundImage: `url("https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png")`,
        }}
      >
        <Card.Img/>
        <Card.Body>
          <Nav.Item>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              Helping Hands
            </Card.Title>
            <Button variant="success" href="https://cstuhlfire.github.io/PoetryProject/">
              Deploy To Application
            </Button>
            <Button href="https://github.com/stbxzr/PoetryProject">
              Project Repository
            </Button>
          </Nav.Item>
        </Card.Body>
      </Card>
    </CardGroup>
    </Row>
  );
};

export default Projects;

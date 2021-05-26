import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";

const Projects = () => {
  return (
    <Row
      style={{
        textAlign: "center",
        width: "75rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <CardGroup style={{ height: "25rem" }} bg="warning">
        <Card
          text="white"
          style={{
            backgroundImage: `url("https://media.istockphoto.com/photos/old-fountain-pen-on-manuscript-picture-id462569549?k=6&m=462569549&s=612x612&w=0&h=zI3sp_3J59d6nmN1WtHVwkoYd2JAY5tHX6pOnjqTPK0=")`,
          }}
        >
          <Card.Img />
          <Card.Body>
            <Nav.Item>
              <Card.Title
                style={{
                  font: "400 30px system-ui",
                  borderStyle: "solid",
                  borderColor: "black",
                  backgroundColor: "black",
                  padding: "1px 7px 5px"
                }}
              >
                Poetry Explore📝
              </Card.Title>

              <Button
                style={{ margin: "5em", fontWeight: "bold", }}
                variant="success"
                href="https://cstuhlfire.github.io/PoetryProject/"
              >
                Deploy To Application
              </Button>

              <Button style={{fontWeight: "bold", }} href="https://github.com/stbxzr/PoetryProject">
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
          <Card.Img />
          <Card.Body>
            <Card.Title                 style={{
                  font: "400 30px system-ui",
                  borderStyle: "solid",
                  borderColor: "black",
                  backgroundColor: "black",
                  padding: "1px 7px 5px"
                }}>
              Quizami📚
            </Card.Title>
            <Nav.Item>
              <Button
                style={{ margin: "5em", fontWeight: "bold", }}
                variant="success"
                href="http://polar-headland-03677.herokuapp.com/login"
              >
                Deploy To Application
              </Button>

              <Button style={{fontWeight: "bold", }} href="https://github.com/universaleric/Quizami">
                Project Repository
              </Button>
            </Nav.Item>
          </Card.Body>
        </Card>
        <Card
          text="white"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/7AM3yeO108hAskEEMkkAukAshrBwqahD18Kf3D7lILD6z0tDSSVQov_xuev5GLYhEWwGc5OvBNz9Axzs_T6FwATU_jTRkw=s600")`,
          }}
        >
          <Card.Img />
          <Card.Body>
            <Nav.Item>
              <Card.Title                 style={{
                  font: "400 30px system-ui",
                  borderStyle: "solid",
                  borderColor: "black",
                  backgroundColor: "black",
                  padding: "1px 7px 5px"
                }}>
                Helping Hands🤲🏻
              </Card.Title>
              <Button
                style={{ margin: "5em", fontWeight: "bold", }}
                variant="success"
                href="https://github.com/universaleric/Helping-Hand"
              >
                Deploy To Application
              </Button >
              <Button style={{fontWeight: "bold", }} href="https://github.com/universaleric/Helping-Hand">
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

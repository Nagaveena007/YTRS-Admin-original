import React from "react";
import { Button, Form, Container, Row, Col, Nav, Card } from "react-bootstrap";
import {
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Admin() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img src="../../assets/img/photo-1431578500526-4d9613015464.jpeg" />
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      className="avatar border-gray"
                      src="../../assets/images/me-discord.jpg"
                    />
                    <h5 className="title">Nagaveena Hallikeri</h5>
                  </a>
                  <p className="description">Frontend Developer</p>
                </div>
                <p className="description text-center">
                  "Lorem ipsum <br></br>
                  Lorem ipsum <br></br>
                  Lorem ipsum "
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader
                subheader="The information "
                title="Projects"
                action={
                  <div className="row">
                    <Nav.Link
                      style={{ color: "black" }}
                      href="https://github.com/Nagaveena007"
                    >
                      <GitHubIcon
                        className="ml-2"
                        style={{ width: "40px", height: "42px" }}
                      />
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "black" }}
                      href="https://github.com/Nagaveena007"
                    >
                      <LinkedInIcon
                        className="mr-3"
                        style={{ width: "48px", height: "50px" }}
                      />
                    </Nav.Link>
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;

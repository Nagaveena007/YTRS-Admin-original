import { Container, Row } from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Home = () => {
  return (
    <>
      <Container fluid className="">
        <Row className="justify-content-start align-items-center">Home</Row>
      </Container>
    </>
  );
};

export default Home;

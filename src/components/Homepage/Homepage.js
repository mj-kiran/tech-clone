import React from "react";
import "./Homepage.css";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Timeline from "../Timeline/Timeline";
function Homepage() {
  return (
    <Container fluid className="homeview">
      <Row className="homepage ">
        <Col className="homepage_navigation ">
          <Navigation  />
        </Col>

        <Col  className="homepage_timeline ">
          <Timeline  />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;

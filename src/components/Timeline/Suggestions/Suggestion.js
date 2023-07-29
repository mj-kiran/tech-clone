import React from 'react'
import './Suggestion.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Avatar } from '@mui/material';

function Suggestion() {
  return (
    <Container fluid className="suggestions">

      <Row className="sugestion_title">
        <span>Suggestions for you </span>
      </Row>

      <Row className="suggestions">

        {/* sgst1 */}
        <Row className="usernames_suggestion">

          <Col className="leftpart_suggsetion">
            <span className="suggestion_avatar">
              <Avatar>K</Avatar>
            </span>

            <Col className="username_info">
              <span className="username"> kiran</span>
              <span className="relation">New to instagram</span>
            </Col>
          </Col>
         
          
          <Col className="rightpart_suggsetion">
            <Button className="follow_button">Follow</Button>
          </Col>
        </Row>

        {/* sgst2 */}
        <Row className="usernames_suggestion">

          <Col className="leftpart_suggsetion">
            <span className="suggestion_avatar">
              <Avatar>K</Avatar>
            </span>
            
            <Col className="username_info">
              <span className="username"> kiran</span>
              <span className="relation">New to instagram</span>
            </Col>
          </Col>
          <Col className="rightpart_suggsetion">
            <Button className="follow_button">Follow</Button>
          </Col>
        </Row>

        {/* sgst3 */}
        <Row className="usernames_suggestion">
          <Col className="leftpart_suggsetion">
            <span className="suggestion_avatar">
              <Avatar>K</Avatar>
            </span>
            <Col className="username_info">
              <span className="username"> kiran</span>
              <span className="relation">New to instagram</span>
            </Col>
          </Col>
          <Col className="rightpart_suggsetion">
            <Button className="follow_button">Follow</Button>
          </Col>
        </Row>

        {/* sgst4 */}
        <Row className="usernames_suggestion">
          <Col className="leftpart_suggsetion">
            <span className="suggestion_avatar">
              <Avatar>K</Avatar>
            </span>
            <Col className="username_info">
              <span className="username"> kiran</span>
              <span className="relation">New to instagram</span>
            </Col>
          </Col>
          <Col className="rightpart_suggsetion">
            <Button className="follow_button">Follow</Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Suggestion
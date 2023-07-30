import { Avatar } from '@mui/material';
import React from 'react'
import './Stories.css'
import { Col, Row } from 'react-bootstrap'


function Stories() {
  return (
    <>
      <Row className="story_header">
        <Col className="single_story">
          <Avatar>K</Avatar>
          <div className="user">kiran</div>
        </Col>

        <Col className="single_story">
          <Avatar>K</Avatar>
          <div className="user"></div>
        </Col>

        <Col className="single_story">
          <Avatar>K</Avatar>
          <div className="user"></div>
        </Col>

        <Col className="single_story">
          <Avatar>K</Avatar>
          <div className="user"></div>
        </Col>

        <Col className="single_story">
          <Avatar>K</Avatar>
          <div className="user"></div>
        </Col>
      </Row>
    </>
  );
}

export default Stories
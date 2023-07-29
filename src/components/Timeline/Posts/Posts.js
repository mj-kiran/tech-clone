import React from 'react'
import './Posts.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
function Posts({item}) {
  return (
    <Container fluid className="post">
      <Row className="post_header">
        <Col className="post_auth_header">
                  <Avatar>{item.user.charAt(0).toUpperCase() }</Avatar>
                  {item.user} • <span>{item.timestamp}</span>
        </Col>
        <Col>
          <MoreHorizIcon />
        </Col>
      </Row>
      <Row className="post_image">
        <img
          src={item.postImage}
          alt=""
        />
      </Row>
      <Row className="post_footer">
        <Row className="footer_icons">
          <Col className="left_foot_icons">
            <Col>
              <FavoriteBorderIcon className="postIcon" />
            </Col>
            <Col>
              <ChatBubbleOutlineIcon className="postIcon" />
            </Col>
            <Col>
              <TelegramIcon className="postIcon" />
            </Col>
          </Col>
          <Col className="right_foot_icons ">
            <BookmarkBorderIcon className="postIcon" />
          </Col>
        </Row>
        {item.likes}
      </Row>
    </Container>
  );
}

export default Posts
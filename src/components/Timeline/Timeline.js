import React, { useState } from "react";
import "./Timeline.css";
import { Col, Container, Row } from "react-bootstrap";
import Suggestion from "./Suggestions/Suggestion";
import Posts from "./Posts/Posts";

function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "_chandran_arun_",
        postImage:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        likes: 54,
        timestamp: "2d",
      },
      {
        user: "thri_vik_rama_n_",
        postImage:
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
        likes: 432,
        timestamp: "2d",
      },
      {
        user: "__mr._lutt__an_",
        postImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        likes: 140,
        timestamp: "2d",
      },
      {
        user: "luke_simon003",
        postImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
        likes: 14,
        timestamp: "2d",
      },
    ]);
  return (
    <div className="timelineview">
      <Row className="timeline">
        <Col className="left_timeline">
          <Container fluid className="timeline_posts">
                      {posts.map((post) => (
                          <Posts item={post} />
            ))}
          </Container>
        </Col>
        <Col className="right_timeline">
          <Suggestion />
        </Col>
      </Row>
    </div>
  );
}

export default Timeline;

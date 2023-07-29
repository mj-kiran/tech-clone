import React from "react";
import "./Navigation.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
function Navigation() {
  return (
    <Container classname="side_nav" fluid>
      <Row className="side_navigation">
        <Col className="insta_image">
          <img
            className="insta_logo"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="instalogo.jpg"
          />
          
          <Button className="small_insta_logo">
            <InstagramIcon />
            
          </Button>
        </Col>

        <Col className="buttons">
          <Row className="button_row">
            {/* icon */}
            <Button className="sidenav_button">
              <HomeIcon />
              <span>Home</span>
            </Button>
            {/* icon */}

            <Button className="sidenav_button">
              <SearchIcon />
              <span>Search</span>
            </Button>

            {/* icon */}
            <Button className="sidenav_button">
              <ExploreIcon />
              <span>Explore</span>
            </Button>
            {/* icon */}
            <Button className="sidenav_button">
              <SlideshowIcon />
              <span>Reels</span>
            </Button>
            {/* icon */}

            <Button className="sidenav_button">
              <ChatIcon />
              <span> Messages</span>
            </Button>
            {/* icon */}
            <Button className="sidenav_button">
              <FavoriteBorderIcon />
              <span>Notifications</span>
            </Button>
            {/* icon */}
            <Button className="sidenav_button">
              <AddCircleOutlineIcon />
              <span>Create</span>
            </Button>
          </Row>
        </Col>
        <Col className="menu_sidenav">
          <Button className="sidenav_button">
            <MenuIcon />
            <span>More</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;

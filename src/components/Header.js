import styled from "@emotion/styled";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import yelp from "../assets/yelp.png";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  return (
    <Navbar>
      <ImageWrapper>
        <img src={logo} alt="Victory Tae Kwon Do logo" />
      </ImageWrapper>
      <NavlinkWrapper>
        <Link to="/" className="nav-link">
          <Button className="nav-btn">HOME</Button>
        </Link>
        <Link to="/about" className="nav-link">
          <Button className="nav-btn">ABOUT</Button>
        </Link>
        <Link to="/instructors" className="nav-link">
          <Button className="nav-btn">INSTRUCTORS</Button>
        </Link>
        <Link to="/classes" className="nav-link">
          <Button className="nav-btn">CLASSES</Button>
        </Link>
        <Link to="/class-schedule" className="nav-link">
          <Button className="nav-btn">SCHEDULE</Button>
        </Link>
        <Link to="/contact" className="nav-link">
          <Button className="nav-btn">CONTACT US</Button>
        </Link>
        <Link to="/news" className="nav-link">
          <Button
            variant="outlined"
            className="signup-btn"
            sx={{ height: 50, width: 150 }}
          >
            NEWS BOARD
          </Button>
        </Link>
      </NavlinkWrapper>

      {/* <SocialsWrapper>
        <Link to="#">
          <FacebookOutlinedIcon />
        </Link>
        <Link to="#">
          <InstagramIcon />
        </Link>
        <Link to="#">
          <img src={yelp} alt="yelp logo" />
        </Link>
        <Link to="#">
          <TwitterIcon />
        </Link>
      </SocialsWrapper> */}
    </Navbar>
  );
};

const Navbar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: #f8f8f8;
  z-index: 100;
`;

const ImageWrapper = styled.div`
  margin-left: 2rem;
  img {
    height: 6rem;
    width: 7rem;
  }
`;

const NavlinkWrapper = styled.div`
  .nav-link {
    margin-right: 2rem;
    text-decoration: none;
    color: black;
  }
  .nav-btn {
    color: black;
    font-weight: bold;
  }
  .nav-btn:hover {
    background-color: #f5f5f5;
  }
  .signup-btn {
    font-weight: bold;
  }
`;

// const SocialsWrapper = styled.div``;

export default Header;

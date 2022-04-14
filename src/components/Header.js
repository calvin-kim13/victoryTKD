import styled from "@emotion/styled";
import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
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
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/classes" className="nav-link">
          Classes
        </Link>
        <Link to="/instructors" className="nav-link">
          Instructors
        </Link>
        <Link to="/class-schedule" className="nav-link">
          Class Schedule
        </Link>
        <Link to="/trial" className="nav-link">
          Trial
        </Link>
        <Link to="/news" className="nav-link">
          News
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  margin-left: 2rem;
  img {
    height: 8rem;
    width: 9rem;
  }
`;

const NavlinkWrapper = styled.div`
  .nav-link {
    margin-right: 2rem;
    color: black;
    text-decoration: none;
  }
  .nav-link:hover {
    color: darkgrey;
  }
`;

// const SocialsWrapper = styled.div``;

export default Header;

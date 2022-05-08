import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import * as React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import CustomBtn from "./Button";
import { Typography } from "@mui/material";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import yelp from "../assets/yelp.png";
import twitter from "../assets/twitter.png";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const handleNavClick = () => setClick(false);

  React.useEffect(() => {
    if (click === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [click]);

  return (
    <div className="navbar">
      <div className="logo">
        <img className="header-logo" src={logo} alt="Victory Taekwondo logo" />

        <a
          href="https://www.facebook.com/victorytkdcenter/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="header-link" src={facebook} alt="" />
        </a>
        <a
          href="https://www.instagram.com/victorytkdcenter/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <img className="header-link" src={instagram} alt="" />
        </a>
        <a
          href="https://www.yelp.com/biz/victory-taekwondo-center-whittier?osq=victory+taekwondo"
          rel="noreferrer"
          target="_blank"
        >
          <img className="header-link" src={yelp} alt="" />
        </a>
        <a
          href="https://twitter.com/victorytkd11"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img className="header-link" src={twitter} alt="" />
        </a>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink to="/" onClick={handleNavClick} className="links">
            <Typography fontWeight="bold" variant="overline">
              home
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" onClick={handleNavClick} className="links">
            <Typography fontWeight="bold" variant="overline">
              about us
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/instructors" onClick={handleNavClick} className="links">
            <Typography fontWeight="bold" variant="overline">
              instructors
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/classes" onClick={handleNavClick} className="links">
            <Typography fontWeight="bold" variant="overline">
              classes
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/class-schedule"
            onClick={handleNavClick}
            className="links"
          >
            <Typography fontWeight="bold" variant="overline">
              schedule
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" onClick={handleNavClick} className="links">
            <Typography fontWeight="bold" variant="overline">
              contact
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news">
            <CustomBtn
              onClick={handleNavClick}
              className="solid-btn header-btn"
            >
              News Board
            </CustomBtn>
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Header;

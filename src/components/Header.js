import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import * as React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import CustomBtn from "./Button";
import { Typography } from "@mui/material";

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
        <img src={logo} alt="Victory Taekwondo logo" />
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
              about
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
          <NavLink to="/news-board">
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

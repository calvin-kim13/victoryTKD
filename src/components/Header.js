import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { FaBars, FaTimes, FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./styles/Navbar.css";

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
          <Link to="/" onClick={handleNavClick}>
            <Button
              size="small"
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
            >
              home
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={handleNavClick}>
            <Button
              size="small"
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
            >
              about
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/instructors" onClick={handleNavClick}>
            <Button
              size="small"
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
            >
              instructors
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/classes" onClick={handleNavClick}>
            <Button
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
              size="small"
            >
              classes
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/class-schedule" onClick={handleNavClick}>
            <Button
              size="small"
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
            >
              schedule
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={handleNavClick}>
            <Button
              size="small"
              sx={{ color: "black", ":hover": { bgcolor: "lightgrey" } }}
            >
              contact
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news-board">
            <Button
              onClick={handleNavClick}
              variant="contained"
              sx={{
                height: 45,
                width: 140,
              }}
            >
              News Board
            </Button>
          </Link>
        </li>
        {/* <div className="social">
          <a href="">
            <FaFacebook size={30} className="facebook" />
          </a>
          <a href="">
            <RiInstagramFill size={30} className="instagram" />
          </a>
          <a href="">
            <FaTwitter size={30} className="twitter" />
          </a>
          <a href="">
            <FaYelp size={30} className="yelp" />
          </a>
        </div> */}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default Header;

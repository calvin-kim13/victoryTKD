import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { FaBars, FaTimes } from "react-icons/fa";
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
          <Link to="/">
            <Button onClick={handleNavClick}>Home</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <Button onClick={handleNavClick}>About</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/instructors">
            <Button onClick={handleNavClick}>Instructors</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/classes">
            <Button onClick={handleNavClick}>Classes</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/class-schedule">
            <Button onClick={handleNavClick}>Schedule</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <Button onClick={handleNavClick}>Contact</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news-board">
            <Button
              onClick={handleNavClick}
              variant="contained"
              sx={{ height: 50, width: 150 }}
            >
              News Board
            </Button>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* <ImageWrapper>
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
      <HamburgerMenu>
        <FaBars />
      </HamburgerMenu> */}

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
    </div>
  );
};

// const Navbar = styled.div`
//   position: sticky;
//   top: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 3rem;
//   background-color: #f8f8f8;
//   z-index: 100;
// `;

// const ImageWrapper = styled.div`
//   margin-left: 2rem;
//   img {
//     height: 6rem;
//     width: 7rem;
//   }
// `;

// const NavlinkWrapper = styled.div`
//   .nav-link {
//     margin-right: 2rem;
//     text-decoration: none;
//     color: black;
//   }
//   .nav-btn {
//     color: black;
//     font-weight: bold;
//   }
//   .nav-btn:hover {
//     background-color: #f5f5f5;
//   }
//   .signup-btn {
//     font-weight: bold;
//   }
//   @media screen and (max-width: 940px) {
//     position: absolute;
//     left: -100%;
//   }
// `;

// const HamburgerMenu = styled.div``;

// const SocialsWrapper = styled.div``;

export default Header;

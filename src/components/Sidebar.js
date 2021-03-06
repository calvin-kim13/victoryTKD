import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../assets/logo.png";
import { FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Tooltip } from "antd";

const Nav = styled.div`
  /* background: linear-gradient(90deg, #252831 0%, #5072a7 100%); */
  background: linear-gradient(90deg, #5072a7 0%, #bbdefb 100%);
  /* background-color: #252831; */
  width: inherit;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-logo {
    width: 11rem;
    margin-right: 1rem;
  }
  .hamburger-link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .social-links-header {
    position: relative;
    bottom: 25px;
    left: 25px;
  }
  .header-links {
    font-size: 1.2rem;
    margin-left: 1rem;
    opacity: 0.7;
    transition: 0.3s ease-in-out all;
  }
  .header-links:hover {
    opacity: 1;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 3rem;
  font-size: 2rem;
  height: 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  font-family: "Montserrat", sans-serif;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 100000;
  .nav-link {
    display: flex;
    color: #e1e9fc;
    justify-content: center;
    align-items: center;
    padding: 30px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 16px;
    opacity: 0.7;
    transition: 0.3s ease-in-out all;
    &:hover {
      background: #252831;
      opacity: 1;
      border-left: 4px solid #5c6bc0;
      cursor: pointer;
      font-weight: bold;
      padding-left: 3rem;
    }
  }
  a.active {
    font-weight: bold;
    opacity: 1;
    background-color: #252831;
    border-left: 4px solid #5c6bc0;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  .header-social-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
  .header-social-link {
    padding: 0.3rem;
  }
  img {
    width: 2.2rem;
    opacity: 0.9;
  }
  img:hover {
    transform: scale(1.1);
    transition: transform 200ms;
    opacity: 1;
  }
  @media screen and (min-width: 1440px) {
    .header-social-row {
      margin-top: 3rem;
    }
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleNavClick = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <div className="hamburger-link-wrapper">
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <div className="social-links-header">
              <Tooltip placement="bottom" title="Facebook">
                <a
                  href="https://www.facebook.com/victorytkdcenter/"
                  rel="noreferrer"
                  target="_blank"
                  className="header-links"
                >
                  <FaFacebook
                    style={{
                      borderRadius: "50px",
                      color: "#fff",
                    }}
                  />
                </a>
              </Tooltip>
              <Tooltip placement="bottom" title="Instagram">
                <a
                  href="https://www.instagram.com/victorytkdcenter/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className="header-links"
                >
                  <RiInstagramFill
                    style={{
                      borderRadius: "50px",
                      color: "#fff",
                    }}
                  />
                </a>
              </Tooltip>
              <Tooltip placement="bottom" title="Yelp">
                <a
                  href="https://www.yelp.com/biz/victory-taekwondo-center-whittier?osq=victory+taekwondo"
                  rel="noreferrer"
                  target="_blank"
                  className="header-links"
                >
                  <FaYelp
                    style={{
                      borderRadius: "50px",
                      color: "#fff",
                    }}
                  />
                </a>
              </Tooltip>
              <Tooltip placement="bottom" title="Twitter">
                <a
                  href="https://twitter.com/victorytkd11"
                  rel="noreferrer"
                  target="_blank"
                  className="header-links"
                >
                  <FaTwitter
                    style={{
                      borderRadius: "50px",
                      color: "#fff",
                    }}
                  />
                </a>
              </Tooltip>
            </div>
          </div>
          <div>
            <img className="header-logo" src={logo} alt="Logo" />
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaTimes onClick={showSidebar} />
            </NavIcon>
            <NavLink to="/" className="nav-link" onClick={handleNavClick}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
              About
            </NavLink>
            <NavLink
              to="/instructors"
              className="nav-link"
              onClick={handleNavClick}
            >
              Instructors
            </NavLink>
            <NavLink
              to="/classes"
              className="nav-link"
              onClick={handleNavClick}
            >
              Classes
            </NavLink>
            <NavLink
              to="/class-schedule"
              className="nav-link"
              onClick={handleNavClick}
            >
              Class Schedule
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={handleNavClick}
            >
              Contact
            </NavLink>
            <NavLink to="/news" className="nav-link" onClick={handleNavClick}>
              News
            </NavLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

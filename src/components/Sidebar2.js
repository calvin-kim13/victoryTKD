import React, { useState } from "react";
import { Drawer, Tooltip } from "antd";
import { NavLink, Link } from "react-router-dom";
import "./styles/Sidebar2.css";
import { FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Sidebar2 = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  //   const [sidebar, setSidebar] = useState(false);

  //   const showSidebar = () => setSidebar(!sidebar);

  //   const handleNavClick = () => setSidebar(false);
  return (
    <>
      <Nav>
        <div className="hamburger-link-wrapper">
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showDrawer} />
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
      <Drawer placement="left" onClose={showDrawer} visible={visible}>
        <div className="drawer-links">
          <NavLink to="/" className="nav-link" onClick={showDrawer}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={showDrawer}>
            About
          </NavLink>
          <NavLink to="/instructors" className="nav-link" onClick={showDrawer}>
            Instructors
          </NavLink>
          <NavLink to="/classes" className="nav-link" onClick={showDrawer}>
            Classes
          </NavLink>
          <NavLink
            to="/class-schedule"
            className="nav-link"
            onClick={showDrawer}
          >
            Class Schedule
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={showDrawer}>
            Contact
          </NavLink>
          <NavLink to="/news" className="nav-link" onClick={showDrawer}>
            News
          </NavLink>
        </div>
      </Drawer>
    </>
  );
};

const Nav = styled.div`
  background: linear-gradient(90deg, #5072a7 0%, #bbdefb 100%);
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
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

export default Sidebar2;

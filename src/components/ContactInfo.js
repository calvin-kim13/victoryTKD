import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import yelp from "../assets/yelp.png";
import twitter from "../assets/twitter.png";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <Typography
        variant="h6"
        fontWeight="bold"
        marginBottom="2rem"
        textAlign="center"
        textTransform="uppercase"
      >
        Contact Information
      </Typography>
      <InfoContainer>
        <div>
          <div className="item">
            <LocalPhoneOutlinedIcon />{" "}
            <span className="item-content">(562) 907-2700</span>
          </div>
          <div className="item">
            <AlternateEmailOutlinedIcon />{" "}
            <span className="item-content">victorytkdcenter@gmail.com</span>
          </div>
          <div className="item">
            <RoomOutlinedIcon />{" "}
            <span className="item-content">
              11758 E. Whittier Blvd. Whittier, CA 90601
            </span>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/victorytkdcenter/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="social link"></img>
          </a>
          <a
            href="https://www.instagram.com/victorytkdcenter/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="social link"></img>
          </a>
          <a
            href="https://www.yelp.com/biz/victory-taekwondo-center-whittier?osq=victory+taekwondo"
            rel="noreferrer"
            target="_blank"
          >
            <img src={yelp} alt="social link"></img>
          </a>
          <a
            href="https://twitter.com/victorytkd11"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="social link"></img>
          </a>
        </div>
      </InfoContainer>
    </ContactInfoContainer>
  );
};

const ContactInfoContainer = styled.div`
  height: 100%;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .item-content {
    margin-left: 1rem;
    color: black;
  }
  .item-content a {
    color: black;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social img {
    width: 2.5rem;
    padding: 0.7rem;
    opacity: 0.7;
  }
  .social img:hover {
    transform: scale(1.1);
    transition: transform 200ms;
    opacity: 1;
  }
  @media screen and (max-width: 1200px) {
    .social {
      justify-content: center;
    }
  }
`;

export default ContactInfo;

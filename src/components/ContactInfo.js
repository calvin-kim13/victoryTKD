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
import "./styles/ContactInfo.css";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <Typography
        variant="h6"
        fontWeight="bold"
        marginTop="3rem"
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
            <span className="item-content">
              <a href="tel:5629072700">(562) 907-2700</a>
            </span>
          </div>
          <div className="item">
            <AlternateEmailOutlinedIcon />{" "}
            <span className="item-content">
              <a href="mailto:victorytkdcenter@gmail.com">
                victorytkdcenter@gmail.com
              </a>
            </span>
          </div>
          <div className="item">
            <RoomOutlinedIcon />{" "}
            <span className="item-content">
              <a
                href="https://www.google.com/maps/place/11758+Whittier+Blvd,+Whittier,+CA+90601/@33.9792564,-118.0540846,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d3c5a40b0ad5:0xeadff0d007ff0813!8m2!3d33.979252!4d-118.0518959"
                rel="noreferrer"
                target="_blank"
              >
                11758 Whittier Blvd, Whittier, CA 90601
              </a>
            </span>
          </div>
        </div>
        <div className="social-link-wrapper-contact">
          <Typography variant="overline" fontWeight="bold">
            Find us on social media
          </Typography>
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
        </div>
      </InfoContainer>
    </ContactInfoContainer>
  );
};

const ContactInfoContainer = styled.div`
  background-color: #e8e8e8;
  padding: 1rem;
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
  .item-content a {
    margin-left: 1rem;
    color: black;
    opacity: 0.7;
  }
  .social-link-wrapper-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 2rem 0;
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
  @media screen and (max-width: 700px) {
    .item {
      font-size: 0.8rem;
    }
    .social img {
      width: 2rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .social {
      justify-content: center;
    }
  }
`;

export default ContactInfo;

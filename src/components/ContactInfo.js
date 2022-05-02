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
            <span className="item-content">
              <a href="tel:7144773232">(562) 907-2700</a>
            </span>
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
          <img src={facebook} alt="social link"></img>
          <img src={instagram} alt="social link"></img>
          <img src={yelp} alt="social link"></img>
          <img src={twitter} alt="social link"></img>
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
  align-items: space-evenly;
  height: 80%;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    margin-left: 2rem;
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
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
  }
  .social img {
    width: 2.5rem;
    padding: 0.7rem;
  }
  @media screen and (max-width: 1200px) {
    .social {
      justify-content: center;
    }
  }
`;

export default ContactInfo;

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <Typography
        variant="h3"
        fontWeight="bold"
        marginBottom="3rem"
        marginLeft="2rem"
      >
        Meet us
      </Typography>
      <InfoContainer>
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
      </InfoContainer>
    </ContactInfoContainer>
  );
};

const ContactInfoContainer = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }
  .item-content {
    margin-left: 1rem;
    color: black;
    text-decoration: none;
  }
  .item-content a {
    color: black;
  }
`;

export default ContactInfo;

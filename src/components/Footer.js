import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaYelp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { grey } from "@mui/material/colors";
const footerColor = grey[900];
const footerTextColor = grey[200];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <CompanyContainer>
          <CompanyHeader>
            <Typography fontWeight="bold">COMPANY</Typography>
          </CompanyHeader>
          <CompanyContent>
            <Link to="/about">About</Link>

            <Link to="/classes">Classes</Link>

            <Link to="/class-schedule">Schedule</Link>
          </CompanyContent>
        </CompanyContainer>
        <ContactContainer>
          <ContactHeader>
            <Typography fontWeight="bold">CONTACT</Typography>
          </ContactHeader>
          <ContactContent>
            <Link to="/contact">victorytkdcenter@gmail.com</Link>

            <div>
              <a href="tel:7144773232">(562) 907-2700</a>
            </div>

            <div className="social-links">
              <a href="">
                <FaFacebookF
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".2rem",
                  }}
                />
              </a>
              <a href="">
                <RiInstagramFill
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".2rem",
                  }}
                />
              </a>
              <a href="">
                <FaYelp
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".2rem",
                  }}
                />
              </a>
              <a href="">
                <FaTwitter
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".2rem",
                  }}
                />
              </a>
            </div>
          </ContactContent>
        </ContactContainer>
        <AddressContainer>
          <AddressHeader>
            <Typography fontWeight="bold">ADDRESS</Typography>
          </AddressHeader>
          <AddressContent>
            <Typography>11758 E. Whittier Blvd. Whittier, CA 90601</Typography>
          </AddressContent>
        </AddressContainer>
      </FooterContainer>
      <CopyrightContainer>
        <Typography variant="overline" className="copyright">
          Copyright &copy; 2022 Victory Taekwondo. All Rights Reserved
        </Typography>
      </CopyrightContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  height: 50vh;
  //   margin-top: 1rem;
  background-color: ${footerColor};
  color: ${footerTextColor};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CompanyHeader = styled.div`
  width: 100%;
  margin-bottom: 0.6rem;
  text-align: center;
`;

const CompanyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ContactHeader = styled.div`
  width: 100%;
  margin-bottom: 0.6rem;
  text-align: center;
`;

const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
  .social-links a {
    margin: 0.3rem;
  }
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AddressHeader = styled.div`
  width: 100%;
  margin-bottom: 0.6rem;
  text-align: center;
`;

const AddressContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
`;

const CopyrightContainer = styled.div`
  .copyright {
    font-size: 0.6rem;
  }
`;

export default Footer;

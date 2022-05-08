import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";
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
            <Typography
              fontWeight="bold"
              className="footerHeaderRed"
              fontSize=".8rem"
            >
              COMPANY
            </Typography>
          </CompanyHeader>
          <CompanyContent>
            <p>
              <a href="/about" className="footer-links">
                About
              </a>
            </p>
            <p>
              <a href="/classes" className="footer-links">
                Classes
              </a>
            </p>
            <p>
              <a href="/class-schedule" className="footer-links">
                Schedule
              </a>
            </p>
            <p>
              <a href="/news-board" className="footer-links">
                News
              </a>
            </p>
          </CompanyContent>
        </CompanyContainer>
        <ContactContainer>
          <ContactHeader>
            <Typography
              fontWeight="bold"
              className="footerHeaderWhite"
              fontSize=".8rem"
            >
              CONTACT
            </Typography>
          </ContactHeader>
          <ContactContent>
            <span className="email">
              <a href="mailto:victorytkdcenter@gmail.com">
                victorytkdcenter@gmail.com
              </a>
            </span>
            <div className="phone">
              <a href="tel:5629072700">(562) 907-2700</a>
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/victorytkdcenter/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".3rem",
                    color: "black",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/victorytkdcenter/?hl=en"
                rel="noreferrer"
                target="_blank"
              >
                <RiInstagramFill
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".3rem",
                    color: "black",
                  }}
                />
              </a>
              <a
                href="https://www.yelp.com/biz/victory-taekwondo-center-whittier?osq=victory+taekwondo"
                rel="noreferrer"
                target="_blank"
              >
                <FaYelp
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".3rem",
                    color: "black",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/victorytkd11"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitter
                  style={{
                    border: "1px solid white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: ".3rem",
                    color: "black",
                  }}
                />
              </a>
            </div>
          </ContactContent>
        </ContactContainer>
        <AddressContainer>
          <AddressHeader>
            <Typography
              fontWeight="bold"
              className="footerHeaderBlue"
              fontSize=".8rem"
            >
              ADDRESS
            </Typography>
          </AddressHeader>
          <AddressContent>
            <Typography fontSize=".8rem">
              11758 Whittier Blvd, Whittier, CA 90601
            </Typography>
          </AddressContent>
        </AddressContainer>
      </FooterContainer>
      <CopyrightContainer>
        <Typography variant="overline" className="copyright">
          Copyright &copy; 2022 Victory Taekwondo.
        </Typography>
      </CopyrightContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  height: 58vh;
  //   margin-top: 1rem;
  background-color: ${footerColor};
  color: ${footerTextColor};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1200px) {
    height: 35vh;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .footerHeaderRed {
    color: white;
    font-weight: bold;
  }
  .footerHeaderWhite {
    color: white;
    font-weight: bold;
  }
  .footerHeaderBlue {
    color: white;
    font-weight: bold;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 50%;
  }
`;

const CompanyHeader = styled.div`
  width: 100%;
  margin-bottom: 0.3rem;
  text-align: center;
`;

const CompanyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    line-height: 0.6rem;
    margin-bottom: -0.1rem;
  }
  .footer-links {
    font-size: 0.8rem;
    opacity: 0.7;
  }
  .footer-links:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 50%;
    margin-top: 1.2rem;
  }
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
  .email {
    font-size: 0.8rem;
    opacity: 0.7;
  }
  .phone {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  .social-links {
    margin-top: 1.4rem;
  }
  .social-links a {
    margin: 0.4rem;
    opacity: 0.7;
  }
  .social-links a:hover {
    opacity: 1;
  }
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 50%;
    margin-top: -6.3rem;
  }
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
  opacity: 0.7;
  @media screen and (min-width: 1200px) {
    width: 10rem;
    text-align: center;
  }
`;

const CopyrightContainer = styled.div`
  .copyright {
    font-size: 0.6rem;
    color: white;
  }
  margin-top: 2.5rem;
`;

export default Footer;

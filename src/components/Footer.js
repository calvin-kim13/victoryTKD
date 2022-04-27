import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { FaYelp, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { grey, blue } from "@mui/material/colors";
const footerColor = grey[900];
const footerTextColor = grey[200];
const footerHeaderColorBlue = blue[300];

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
            <p
              className="links"
              onClick={() => window.location.replace("/about")}
            >
              About
            </p>

            <p
              className="links"
              onClick={() => window.location.replace("/classes")}
            >
              Classes
            </p>

            <p
              className="links"
              onClick={() => window.location.replace("/class-schedule")}
            >
              Schedule
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
            <span className="email">victorytkdcenter@gmail.com</span>
            <div className="phone">
              <a href="tel:7144773232">(562) 907-2700</a>
            </div>
            <div className="social-links">
              <a href="">
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
              <a href="">
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
              <a href="">
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
              <a href="">
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
              11758 E. Whittier Blvd. Whittier, CA 90601
            </Typography>
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
  height: 55vh;
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
    color: ${footerHeaderColorBlue};
  }
  .footerHeaderWhite {
    color: ${footerHeaderColorBlue};
  }
  .footerHeaderBlue {
    color: ${footerHeaderColorBlue};
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
  margin-bottom: 1.5rem;
  @media screen and (min-width: 1200px) {
    width: 20%;
    height: 50%;
  }
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
  .links {
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
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
  }
  .phone {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
  .social-links {
    margin-top: 1.2rem;
  }
  .social-links a {
    margin: 0.3rem;
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
    margin-top: -5.2rem;
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

import React from "react";
import { motion } from "framer-motion";
import NewClassSchedule from "../components/News/NewClassSchedule";
import NewCustomizedUniforms from "../components/News/NewCustomizedUniforms";
import ExtraClasses from "../components/News/ExtraClasses";
import FakeEmail from "../components/News/FakeEmail";
import Zoom from "../components/News/Zoom";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const News = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <NewsHeader>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
        >
          NEWS BOARD
        </Typography>
      </NewsHeader>
      <NewClassSchedule />
      <NewCustomizedUniforms />
      <ExtraClasses />
      <FakeEmail />
      <Zoom />
    </motion.div>
  );
};

const NewsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: #252831;
  border-bottom: 1px solid #252831;
  max-width: 70%;
  margin: 2rem auto;
  padding: 0.2rem;
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 25%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 20%;
  }
`;

export default News;

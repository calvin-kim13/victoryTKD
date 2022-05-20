import React from "react";
import Zoom from "react-reveal/Zoom";
import NewClassSchedule from "../components/News/NewClassSchedule";
import NewCustomizedUniforms from "../components/News/NewCustomizedUniforms";
import ExtraClasses from "../components/News/ExtraClasses";
import FakeEmail from "../components/News/FakeEmail";
import ZoomInfo from "../components/News/ZoomInfo";
import { Paper, Typography } from "@mui/material";

const News = () => {
  return (
    <Zoom>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
          padding="2rem"
        >
          NEWS BOARD
        </Typography>
      </Paper>
      <NewClassSchedule />
      <NewCustomizedUniforms />
      <ExtraClasses />
      <FakeEmail />
      <ZoomInfo />
    </Zoom>
  );
};

export default News;

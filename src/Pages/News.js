import React from "react";
import { Fade } from "react-awesome-reveal";
import NewClassSchedule from "../components/News/NewClassSchedule";
import NewCustomizedUniforms from "../components/News/NewCustomizedUniforms";
import ExtraClasses from "../components/News/ExtraClasses";
import FakeEmail from "../components/News/FakeEmail";
import ZoomInfo from "../components/News/ZoomInfo";
import { Paper } from "@mui/material";
import "./styles/News.css";

const News = () => {
  return (
    <Fade up>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <div className="news-header">NEWS BOARD</div>
      </Paper>
      <NewClassSchedule />
      <NewCustomizedUniforms />
      <ExtraClasses />
      <FakeEmail />
      <ZoomInfo />
    </Fade>
  );
};

export default News;

import { Paper, Typography } from "@mui/material";
import React from "react";
import "./styles/Zoom.css";

const Zoom = () => {
  return (
    <Paper elevation={12} className="zoom-wrapper">
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
        borderBottom="2px solid black"
        paddingBottom="2rem"
      >
        ZOOM INSTRUCTIONS
      </Typography>
      <div className="zoom-text">
        <ul>
          <li>
            <Typography>
              Go to the app store and install “ZOOM Cloud Meetings”
            </Typography>
          </li>
          <li>
            <Typography>Click “Join a Meeting”</Typography>
          </li>
          <ul>
            <li>
              <Typography>
                Enter <span className="zoom-id">“7143371500”</span> on Meeting
                ID
              </Typography>
            </li>
            <li>
              <Typography>Click “Join”</Typography>
            </li>
            <li>
              <Typography>
                Enter <span className="zoom-pw">"1234"</span> on Password and
                click "Continue"
              </Typography>
            </li>
          </ul>
          <li>
            <Typography>
              Click “Join with Computer Audio” or “Call using Internet Audio”
            </Typography>
          </li>
          <li>
            <Typography>Mute yourself and turn video on</Typography>
          </li>
        </ul>
      </div>
      <div className="zoom-info">
        <Typography sx={{ color: "dodgerblue" }}>
          *Meeting ID: 7143371500
        </Typography>
        <Typography sx={{ color: "red" }}>*Password: 1234</Typography>
      </div>
    </Paper>
  );
};

export default Zoom;

import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import grandmasterImg from "../assets/grandmaster.jpg";
import michaelImg from "../assets/michael.jpg";
import CardContent from "@mui/material/CardContent";
import Fade from "react-reveal/Fade";
import "./styles/Instructors.css";
import isaacImg from "../assets/isaac.jpeg";
import chadImg from "../assets/chad.jpeg";

const Instructors = () => {
  return (
    <Fade up>
      <Paper elevation={8} style={{ backgroundColor: "#f5f5f5" }}>
        <div className="instructor-header">INSTRUCTORS</div>
      </Paper>
      <InstructorsContent>
        <Paper
          sx={{ maxWidth: 800, backgroundColor: "#eee" }}
          className="grand-master"
          elevation={4}
        >
          <div className="image">
            <img
              src={grandmasterImg}
              alt="grandmaster"
              className="master-img"
            />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
              fontSize=""
              className="title"
            >
              Grand Master Hyun Y. Kim
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.7rem"
              fontSize=""
              className="title-description"
            >
              <ul>
                <li>Founder of Victory Taekwondo Center</li>
                <li>
                  7th Degree Black Belt certified by the World Taekwondo
                  Federation (WTF){" "}
                </li>
                <li>
                  {" "}
                  Former Secretary General of California Taekwondo United (CTU)
                </li>
                <li> President of the World Masters' Association (WMA)</li>
                <li> 40+ years of teaching experience</li>
                <li> Youngest Grand Master in the World (WTF)</li>
                <li> 1981 Korean National Sparring Champion</li>
              </ul>
            </Typography>
          </CardContent>
        </Paper>

        <Paper
          sx={{ maxWidth: 800, backgroundColor: "#eee" }}
          className="master-michael"
          elevation={4}
        >
          <div className="image">
            <img src={michaelImg} alt="michael" className="master-img" />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
              fontSize=""
              className="title"
            >
              Master Michael Guajardo
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.7rem"
              fontSize=""
              className="title-description"
            >
              <ul>
                <li>
                  4th Degree Black Belt certified by the World Taekwondo
                  Federation (WTF)
                </li>
                <li>20+ years of Taekwondo experience</li>
                <li>15+ years of teaching experience</li>
              </ul>
            </Typography>
          </CardContent>
        </Paper>
        <Paper
          sx={{ maxWidth: 800, backgroundColor: "#eee" }}
          className="grand-master chad"
          elevation={4}
        >
          <div className="image">
            <img src={chadImg} alt="Master Chad" className="master-img" />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
              fontSize=""
              className="title"
            >
              Master Chad Kim
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.7rem"
              fontSize=""
              className="title-description"
            >
              <ul>
                <li>
                  4th Degree Black Belt certified by the World Taekwondo
                  Federation (WTF)
                </li>
                <li>20+ years of Taekwondo experience</li>
                <li>World, National, and State Gold Medalist</li>
              </ul>
            </Typography>
          </CardContent>
        </Paper>
        <Paper
          sx={{ maxWidth: 800, backgroundColor: "#eee" }}
          className="master-michael isaac"
          elevation={4}
        >
          <div className="image">
            <img src={isaacImg} alt="Instructor Isaac" className="master-img" />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
              fontSize=""
              className="title"
            >
              Instructor Isaac Trujillo
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.7rem"
              fontSize=""
              className="title-description"
            >
              <ul>
                <li>
                  3rd Degree Black Belt certified by the World Taekwondo
                  Federation (WTF)
                </li>
                <li>10 years of Taekwondo experience</li>
                <li>CA State Gold Medalist</li>
              </ul>
            </Typography>
          </CardContent>
        </Paper>
      </InstructorsContent>
    </Fade>
  );
};

const InstructorsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: 50rem;
  .master-img {
    width: 20rem;
    margin: 1rem auto;
  }
  .master-michael,
  .chad,
  .isaac {
    margin-top: 3rem;
  }

  ul li {
    list-style: square;
  }
  @media screen and (max-width: 1000px) {
    ul {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
    .image {
      display: flex;
      align-items: center;
    }
    .grand-master {
      width: 20rem;
      padding: 1rem;
    }
    .master-michael {
      width: 20rem;
      padding: 1rem;
    }
    .master-img {
      width: 10rem;
      height: 12rem;
      // margin: 1rem auto;
    }
    width: 100%;
  }
  @media screen and (min-width: 1000px) {
    .grand-master {
      display: flex;
      padding-left: 1rem;
    }
    .master-michael {
      display: flex;
      flex-direction: row-reverse;
      padding-right: 1rem;
    }
    .team-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Instructors;

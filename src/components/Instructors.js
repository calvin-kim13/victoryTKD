import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import grandmasterImg from "../assets/grandmaster.jpg";
import michaelImg from "../assets/michael.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Avatar } from "@mui/material";

const Instructors = () => {
  return (
    <InstructorsContainer>
      <InstructorsHeader>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          letterSpacing="0.2rem"
          fontWeight="bold"
          className="meetTeam"
        >
          MEET THE TEAM
        </Typography>
      </InstructorsHeader>
      <InstructorsContent>
        <Card sx={{ maxWidth: 800 }} className="grand-master">
          {/* <CardMedia
            component="img"
            alt="Image of Grand Master Hyun Y. Kim"
            height="400"
            className="master-img"
            image={grandmasterImg}
          /> */}
          {/* <Avatar
            alt="Grand Master Hyun Y. Kim"
            src={grandmasterImg}
            sx={{ width: 200, height: 300, backgroundPosition: "bottom" }}
            className="master-img"
          /> */}
          <div className="image">
            <img src={grandmasterImg} alt="" className="master-img" />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
            >
              Grand Master Hyun Y. Kim
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.5rem"
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
        </Card>

        <Card sx={{ maxWidth: 800 }} className="master-michael">
          {/* <CardMedia
            component="img"
            alt="Image of Master Michael Guajardo"
            height="400"
            className="master-img"
            image={michaelImg}
          /> */}
          {/* <Avatar
            alt="Master Michael Guajardo"
            src={michaelImg}
            sx={{ width: 200, height: 300 }}
            className="master-img"
          /> */}
          <div className="image">
            <img src={michaelImg} alt="" className="master-img" />
          </div>
          <CardContent className="team-text">
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              textAlign="center"
              fontWeight="bold"
            >
              Master Michael Guajardo
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              lineHeight="1.5rem"
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
        </Card>
      </InstructorsContent>
    </InstructorsContainer>
  );
};

const InstructorsContainer = styled.div`
  ul li {
    list-style: square;
  }
`;

const InstructorsHeader = styled.div`
  margin-top: 2rem;
  @media screen and (max-width: 1000px) {
    .meetTeam {
      // font-size: 2rem;
    }
  }
`;

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
  .master-michael {
    margin-top: 3rem;
  }
  ul {
    padding: 0 2rem;
  }
  @media screen and (max-width: 1000px) {
    .image {
      display: flex;
      align-items: center;
    }
    .grand-master {
      width: 26rem;
      padding: 1rem;
    }
    .master-michael {
      width: 26rem;
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

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import weapons from "../assets/weapons.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Weapons = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Sidebar />
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        WEAPONS
      </Typography>
      <WeaponsContent>
        <Typography variant="body1" gutterBottom className="description">
          Weapons Program is an extra class where students learn how to properly
          and safely use various weapons: Nunchucks, Long Staff, Short Staff,
          and Cane. <br />
          <br /> Students also take a Weapon's Test to level up their skills and
          techniques.
        </Typography>
        <WeaponsImage>
          <img src={weapons} alt="Weapons" className="weapon-img" />
        </WeaponsImage>
      </WeaponsContent>
      <BackButton>
        <Button className="classes-btn" onClick={() => navigate(-1)}>
          Back to Classes
        </Button>
      </BackButton>
    </motion.div>
  );
};

const WeaponsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    width: 25rem;
  }
  @media screen and (max-width: 700px) {
    .description {
      width: 18rem;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
const WeaponsImage = styled.div`
  @media screen and (max-width: 700px) {
    .weapon-img {
      width: 20rem;
    }
  }
`;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default Weapons;

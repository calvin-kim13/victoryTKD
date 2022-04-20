import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import weapons from "../assets/weapons.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Weapons = () => {
  return (
    <WeaponsContainer>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
      >
        Weapons
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
          <img src={weapons} alt="Weapons Image" />
        </WeaponsImage>
      </WeaponsContent>
      <BackButton>
        <Button
          variant="contained"
          startIcon={<ArrowLeftIcon />}
          onClick={() => window.location.replace("/classes")}
        >
          Back to Classes
        </Button>
      </BackButton>
    </WeaponsContainer>
  );
};

const WeaponsContainer = styled.div``;
const WeaponsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    width: 25rem;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
const WeaponsImage = styled.div``;

const BackButton = styled.div`
  text-align: center;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default Weapons;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import tinyHero from "../assets/tinyHero.png";
import children from "../assets/children.png";
import teenAdult from "../assets/teenAdult.png";
import weapons from "../assets/weapons.png";
import sparring from "../assets/sparring.png";
import elitecomp from "../assets/elitecomp.png";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "95% !important", // Overrides inline-style
    height: 300,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        textAlign="center"
        letterSpacing="0.2rem"
        fontWeight="bold"
      >
        Our Classes
      </Typography>
      <Box
        sx={{
          minWidth: 300,
          width: "100%",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/tiny-heroes")}
        >
          <ImageSrc style={{ backgroundImage: `url(${tinyHero})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              TINY HEROES
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/children")}
        >
          <ImageSrc style={{ backgroundImage: `url(${children})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              CHILDREN
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/teen-adult")}
        >
          <ImageSrc style={{ backgroundImage: `url(${teenAdult})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              TEENS & ADULTS
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/weapons")}
        >
          <ImageSrc style={{ backgroundImage: `url(${weapons})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              WEAPONS
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/sparring")}
        >
          <ImageSrc style={{ backgroundImage: `url(${sparring})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              SPARRING
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ImageButton
          focusRipple
          style={{
            width: "30%",
            margin: ".1rem",
          }}
          onClick={() => window.location.replace("/elite-competition")}
        >
          <ImageSrc style={{ backgroundImage: `url(${elitecomp})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              ELITE COMPETITION
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
    </>
  );
}

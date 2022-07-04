import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { RightIcon, LeftIcon } from "./SvgIcon";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import TextAnimate from "../TextAnimate"


const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "128px",
        }}
      >
        <Box sx={{ position: "absolute", right: 0, top: 0, zindex: -1 }}>
          <RightIcon />
        </Box>
        <Box sx={{ position: "absolute", left: 0, bottom: 0, zindex: -1 }}>
          <LeftIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            width: "50%",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 600, textTransform: "uppercase" }}
          >
            Decentralized Lottery System
          </Typography>
          <TextAnimate texts={[{ text:'For The People', duration: 4000 }, {text:'By The People', duration: 4000}, {text:'Through The People', duration: 4000}]} TextRenderer={'h1'} />
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, width: "auto", opacity: 0.9, paddingTop: "32px" }}
          >
            The system which is Participate in lottery by Clicking below Button.
          </Typography>
          
          <ScrollLink
            to="card"
            spy={true}
            smooth={true}
            offset={50}
            duration={200}
          >
            <Button variant="outlined" sx={{ margin: "auto" }} size="large">
              Click Here To Participate
            </Button>
          </ScrollLink>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Hero;

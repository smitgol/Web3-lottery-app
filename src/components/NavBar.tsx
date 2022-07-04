import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Link from 'next/link'

const NavText = styled(Typography)`
  :hover {
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
`;

const NavBar: React.FC = () => {
  const [position, setPosition] = useState<"fixed" | "absolute" | "relative" | "static" | "sticky" | undefined>("absolute");
  const [backgroundColor, setBackgroundColor] = useState<string>("transparent");
  const [boxShadow, setBoxShadow] = useState<string>("none");
  const [backdropFilter, setBackdropFilter] = useState<string>("none");

  const handleScroll = () => {
    if (window.scrollY > 15) {
      setPosition("fixed");
      setBackgroundColor("rgba(74,108,247,0.2)");
      setBoxShadow("inset 0 -1px 0 0 rgb(0 0 0 / 10%)");
      setBackdropFilter("blur(5px)");
    } else {
      setPosition("absolute");
      setBackgroundColor("transparent");
      setBoxShadow("none");
      setBackdropFilter("none");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backdropFilter: { backdropFilter },
          backgroundColor: { backgroundColor },
          boxShadow: { boxShadow },
          backgroundImage: "none",
        }}
        position={position}
      >
        <Toolbar
          variant="regular"
          sx={{ justifyContent: "space-around", margin: 0 }}
        >
          <Link href="/">
          <NavText variant="h6" color="primary">
            Home
          </NavText>
          </Link>
          <Link href="/manager">
          <NavText variant="h6" color="primary">
            Manager Login
          </NavText>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;

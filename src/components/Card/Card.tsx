import React, {useContext} from "react";
import Box from "@mui/material/Box";
import { Card as MuiCard } from "@mui/material";
import ProgressBar from "./ProgressBar";
import CardContent from "./CardContent";
import { wallet } from "../../context/Context";

const Card: React.FC = () => {
  const { activeStep } = useContext(wallet);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="card"
    >
      <MuiCard
        sx={{
          minWidth: "60%",
          minHeight: "60%",
        }}
        variant="outlined"
      >
        <ProgressBar activeStep={activeStep} />
        <CardContent />
      </MuiCard>
    </Box>
  );
};

export default Card;

import React, { useContext } from "react";
import ConnectWallet from "./Section/ConnectWallet";
import Box from "@mui/material/Box";
import PayEther from "./Section/PayEther";
import Transcation from "./Section/Transcation";
import { wallet } from "../../context/Context";

const CardContent: React.FC = () => {
  const { activeStep } = useContext(wallet);
  const section_arr = [<ConnectWallet key="connect_wallet" />, <PayEther key="pay_ether"/>, <Transcation key="transcation" />]
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        gap: "30px",
        flexDirection: "column",
      }}
    >
      {section_arr[activeStep]}
    </Box>
  );
};

export default CardContent;

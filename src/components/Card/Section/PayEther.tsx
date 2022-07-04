import React, {useContext} from "react";
import { Box, Button, Typography } from "@mui/material";
import { wallet } from "../../../context/Context"

const PayEther = () => {
  const {
    setActiveStep,
  } = useContext(wallet);

  const handleTransaction = () => {
    setActiveStep((preVal:number)=>preVal+1)
  }
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        align="center"
        sx={{ width: "60%", paddingTop: "24px" }}
      >
        To participant in lottery.you have to pay 1 ether.This payment will be
        hold by decentralized system.
      </Typography>
      <Button variant="contained" color="info" sx={{ marginTop: "24px" }} onClick={() => {handleTransaction()}}>
        Pay Ether
      </Button>
    </React.Fragment>
  );
};

export default PayEther;

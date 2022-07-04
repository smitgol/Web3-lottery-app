import React, { useContext } from "react";
import { wallet } from "../context/Context";
import { Button } from "@mui/material";

declare var window: any
const ConnectWalletCom: React.FC = () => {
  const {
    walletAddress,
    setWalletAddress,
    alert,
    setAlert,
    activeStep,
    setActiveStep,
  } = useContext(wallet);
  const connectWallet = async () => {
    if (walletAddress == "") {
      try {
        const { ethereum } = window;

        if (ethereum) {
          console.log(ethereum);
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          if (accounts.length !== 0) {
            const account = accounts[0];
            setWalletAddress(account);
            setActiveStep((preValue: number) => preValue + 1);
          } else {
            setAlert({
              open: true,
              message: "Couldn't find account.",
              type: "error",
            });
          }
        } else {
          setAlert({
            open: true,
            message: "Couldn't find meta mask wallet.",
            type: "error",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <React.Fragment>
      <Button variant="contained" color="info" onClick={connectWallet}>
        Connect Wallet
      </Button>
    </React.Fragment>
  );
};

export default ConnectWalletCom;

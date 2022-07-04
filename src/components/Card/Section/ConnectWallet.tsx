import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IoWalletOutline } from "react-icons/io5";
import ConnectWalletCom from "../../connectWalletCom";


const ConnectWallet: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h5">Connect Your Wallet</Typography>
      <Typography variant="h6">
        connecting wallet is neccessary to do transcation in web3.
      </Typography>
      <IoWalletOutline size="3rem" />
      <ConnectWalletCom></ConnectWalletCom>
    </React.Fragment>
  );
};

export default ConnectWallet;

import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ethers } from "ethers";
import {smart_contract_address} from "../../../config";

declare var window: any

const Transcation = () => {

  const [status, setStatus] = useState<string>("")
  const initiateTranscation = async() => {
    try {
      const {ethereum} = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner();
        const tx = {
          to: smart_contract_address,
          value: ethers.utils.parseEther('0.01')
        }
        const transcation = await signer.sendTransaction(tx)
        setStatus("success")
      }
    }
    catch(error) {
      console.log(error)
      setStatus("error")
    }
  }

  useEffect(
    ()=> {
      setStatus("loading")
      initiateTranscation();
    },[]
  )

  const loadContent = () => {
    if (status === "loading") {
      return (<>
      <CircularProgress />
      <Typography variant="h5">Transcation is in progress</Typography>
      </>)
    }
    else if (status === "success") {
      return (<>
      <AiFillCheckCircle size="3rem" />
      <Typography variant="h6">Transcation is sucessfull</Typography>
      </>)
    }
    else {
      return (<>
      <AiFillCloseCircle size="3rem" />
      <Typography variant="h6">Could not receive your Payment</Typography>
      </>)
    }
  }
  return (
    <React.Fragment>
      {loadContent()}
    </React.Fragment>
  );
};

export default Transcation;

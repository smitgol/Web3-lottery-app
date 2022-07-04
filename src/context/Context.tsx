import { alertTitleClasses } from "@mui/material";
import React, { createContext, useState } from "react";
import {AlertColor} from '@mui/material/Alert';

type alert = { open: boolean; message: string; type: AlertColor };

type WalletContextType = {
  setWalletAddress: (value: string) => void;
  walletAddress: string;
  alert: alert;
  setAlert: (value: alert) => void;
  activeStep: number;
  setActiveStep: (value: (val:number)=> number) => void;
};
export const wallet = createContext<WalletContextType>({
  walletAddress: "",
  setWalletAddress: ()=>{},
  alert: {
    open: false,
    message: "",
    type: "success",
  },
  setAlert: ()=> {},
  activeStep: 0,
  setActiveStep: ()=> {}
});

type Props = { children: React.ReactNode };

const Context: React.FC<Props> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [alert, setAlert] = useState<alert>({
    open: false,
    message: "",
    type: "success",
  });
  const [activeStep, setActiveStep] = useState<number>(0);
  return (
    <wallet.Provider
      value={{
        walletAddress,
        setWalletAddress,
        alert,
        setAlert,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </wallet.Provider>
  );
};

export default Context;

import React, { useContext } from "react";
import { Alert as AlertMui, AlertTitle, Snackbar } from "@mui/material";
import {wallet} from "../context/Context";

const Alert = () => {
  const { alert, setAlert } = useContext(wallet);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ open: false, message: "", type: "error" });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <AlertMui
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </AlertMui>
    </Snackbar>
  );
};

export default Alert;

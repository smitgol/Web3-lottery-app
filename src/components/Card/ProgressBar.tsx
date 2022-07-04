import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Connect Your Wallet", "Pay Ether", "Transcation Confirmation"];

const ProgressBar: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} sx={{ padding: "24px" }}>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default ProgressBar;

import React, { useState, useContext } from "react";
import "./styles.css";
import StepZero from "./views/StepZero";
import StepOne from "./views/StepOne";
import StepTwo from "./views/StepTwo";
import StepThree from "./views/StepThree";
import { UserContext, UserContextProvider } from "./Contexts/userFormContext";

function App() {
  const { step = 0 } = useContext(UserContext);
  const steps = [
    <StepZero />,
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepThree />
  ];
  return <div className="App">{steps[step]}</div>;
}

const AppWithContext = () => (
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

export default AppWithContext;

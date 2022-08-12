import React, { useState } from "react";

const UserContext = React.createContext({});

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [selectedOffice, setSelectedOffice] = useState({});
  const [step, setStep] = useState(0);
  return (
    <UserContext.Provider
      {...props}
      value={{
        userData,
        setUserData,
        selectedOffice,
        setSelectedOffice,
        step,
        setStep
      }}
    />
  );
};

export { UserContext, UserContextProvider };

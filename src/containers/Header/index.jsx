import React, { useContext } from "react";
import { HeaderStyled } from "./Header.styles.js";
import Logo from "../../components/Logo";
import ViewNumber from "../../components/ViewNumber";
import Netux from "../../components/Netux";
import { KeyboardBackspace } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { UserContext } from "../../Contexts/userFormContext";

const Header = () => {
  const { step, setStep } = useContext(UserContext);
  return (
    <HeaderStyled>
      <Logo />
      {!!step && (
        <>
          <Button
            startIcon={<KeyboardBackspace />}
            style={{ color: "black" }}
            onClick={() => setStep((prevState) => prevState - 1)}
          >
            atras
          </Button>
          <ViewNumber step={step} />
          <Netux />
        </>
      )}
    </HeaderStyled>
  );
};
export default Header;

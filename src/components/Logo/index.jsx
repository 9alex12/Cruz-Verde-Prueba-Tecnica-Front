import React from "react";
import LogoImg from "../../assets/CruzVerde.png";
import { LogoContainer } from "./Logo.styles";

const Logo = () => {
  return (
    <LogoContainer>
      <img src={LogoImg} alt="Logo Cruz Verde" width="280" height="57" />
    </LogoContainer>
  );
};

export default Logo;

import React from "react";
import NetuxLogo from "../../assets/NetuxLogo.png";
import { NetuxContainer } from "./Netux.styles";

const Netux = () => {
  return (
    <NetuxContainer>
      <img src={NetuxLogo} alt="Logo Netux" width="170" height="90" />
    </NetuxContainer>
  );
};

export default Netux;

import React from "react";
import Logo from "../../components/Logo";
import Netux from "../../components/Netux";
import Header from "../../containers/Header";
import ShiftInformation from "../../containers/ShiftInformation";
import MainImage from "../../assets/Grupo2073.svg";
import { Container, NetuxContainer } from "./StepZero.styles";

const StepZero = () => {
  return (
    <>
      <Logo />
      <Container>
        <ShiftInformation />
        <NetuxContainer>
          <img src={MainImage} alt="" />
          <Netux />
        </NetuxContainer>
      </Container>
    </>
  );
};

export default StepZero;

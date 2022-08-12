import React, { useContext } from "react";
import { UserContext } from "../../Contexts/userFormContext";
import Header from "../../containers/Header";
import UserSummary from "../../components/UserSummary";
import Image from "../../assets/Grupo2073.svg";

import {
  MainContainer,
  LeftContainer,
  RightContainer
} from "./StepThree.styles";

const StepThree = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftContainer>
          <UserSummary />
        </LeftContainer>
        <RightContainer>
          <img src={Image} alt="Imagen de netux" />
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default StepThree;

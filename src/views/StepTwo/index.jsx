import React from "react";
import Header from "../../containers/Header";
import Form from "../../containers/Form";
import Button from "../../components/Button";
import OfficeInformation from "../../components/OfficeInformation";
import MainImage from "../../assets/Grupo1376.svg";

import {
  Container,
  MainContainer,
  RightContainer,
  LeftContainer
} from "./StepTwo.styes";

const StepTwo = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <LeftContainer>
          <Form />
        </LeftContainer>
        <RightContainer>
          <img src={MainImage} alt="" />
        </RightContainer>
      </MainContainer>
    </Container>
  );
};

export default StepTwo;

import React from "react";
import ButtonComponent from "../";
import {
  ContainerCss,
  TextContainer,
  StepsContainer
} from "./ShiftInformation.styles";

const ShiftInformation = () => {
  const STEPS = [
    "Selecciona la oficina más cercana",
    "Ingresa tus datos",
    "Selecciona el servicio",
    "Verifica tu informacion"
  ];
  return (
    <ContainerCss>
      <TextContainer>
        <h2>Solicita tu turno virtual</h2>
        <h3>y realiza todos tus trámites sin filas</h3>
      </TextContainer>
      <h4>Como solicitar tu turno</h4>
      <StepsContainer>
        <ol>
          {STEPS.map((text) => {
            return <li>{text}</li>;
          })}
        </ol>
      </StepsContainer>
      <ButtonComponent text="Solicitar turno" />
    </ContainerCss>
  );
};

export default ShiftInformation;

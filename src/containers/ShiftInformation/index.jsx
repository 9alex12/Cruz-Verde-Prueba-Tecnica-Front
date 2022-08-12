import React, { useContext } from "react";
import ButtonComponent from "../../components/Button";
import { STEPS_SHIFT } from "../../utils/constants";
import {
  ContainerCss,
  TextContainer,
  StepsContainer
} from "./ShiftInformation.styles";
import { UserContext } from "../../Contexts/userFormContext";

const ShiftInformation = () => {
  const { setStep } = useContext(UserContext);
  return (
    <ContainerCss>
      <TextContainer>
        <h2>Solicita tu turno virtual</h2>
        <h3>y realiza todos tus trámites sin filas</h3>
      </TextContainer>
      <h4>Como solicitar tu turno</h4>
      <StepsContainer>
        <ol>
          {STEPS_SHIFT.map((text) => {
            return <li>{text}</li>;
          })}
        </ol>
      </StepsContainer>
      <ButtonComponent
        style={{
          width: 319
        }}
        text="Solicitar turno"
        onClick={() => setStep(1)}
      />
    </ContainerCss>
  );
};

export default ShiftInformation;

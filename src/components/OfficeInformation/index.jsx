import React from "react";
import { Container } from "./OfficeInformation.styles";

const OfficeInformation = ({ officeInfo }) => {
  return (
    <Container>
      <p>{officeInfo?.nombre}</p>
      <p>{officeInfo?.direccion}</p>
      <p>Horario: 8:00 a.m - 5:00p.m</p>
    </Container>
  );
};

export default OfficeInformation;

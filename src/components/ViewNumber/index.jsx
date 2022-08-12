import React, { useContext } from "react";
import { Container } from "./ViewNumber.styles";
import { UserContext } from "../../Contexts/userFormContext";

const ViewNumber = () => {
  const { step } = useContext(UserContext);
  return (
    <Container step={step}>
      <div></div>
      <ol>
        <li key={1} />
        <li key={2} />
        <li key={3} />
        <li key={4} />
      </ol>
    </Container>
  );
};

export default ViewNumber;

import React, { useContext } from "react";
import Header from "../../containers/Header";
import OfficeSearch from "../../containers/OfficeSearch";
import Map from "../../components/Map";
import { Container, MainSection } from "./StepOne.styles.js";
import { OFFICES } from "../../components/OfficesData";
import { UserContext } from "../../Contexts/userFormContext";

const StepOne = () => {
  const { setSelectedOffice } = useContext(UserContext);

  const handleChangeRadio = (event) => {
    setSelectedOffice(event.target.value);
  };

  return (
    <Container>
      <Header step={1} />
      <MainSection>
        <OfficeSearch data={OFFICES} onChangeRadio={handleChangeRadio} />
        <Map />
      </MainSection>
    </Container>
  );
};

export default StepOne;

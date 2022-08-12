import React, { useContext, useState } from "react";
import OfficeInformation from "../OfficeInformation";
import { TextContainer, OfficeInfoContainer } from "./UserSummary.styles";
import Button from "../Button";
import { UserContext } from "../../Contexts/userFormContext";
import { OFFICES } from "../OfficesData";
import PopUp from "../../containers/PopUp";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../PDF";

const UserSummary = () => {
  const { setStep, userData, selectedOffice } = useContext(UserContext);

  const officeData = OFFICES.find((office) => office.nombre === selectedOffice);

  //Modal
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setStep(4);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const {
    firstName,
    secondName,
    lastName,
    lastNameTwo,
    documentType,
    documentNumber
  } = userData;

  const totalName = `${firstName} ${secondName} ${lastName} ${lastNameTwo}`;
  const typeAndNumberDoc = `${documentType} ${documentNumber}`;
  return (
    <>
      <TextContainer>
        <h2>Verifica tu información</h2>
        <p>{totalName}</p>
        <h3>{`${documentType} ${documentNumber}`}</h3>
        <p>Consulta externa</p>
        <OfficeInfoContainer>
          <OfficeInformation officeInfo={officeData} />
        </OfficeInfoContainer>
      </TextContainer>

      <PDFDownloadLink
        document={
          <MyDocument
            totalName={totalName}
            typeAndNumberDoc={typeAndNumberDoc}
            officeData={officeData}
          />
        }
        fileName="TurnoCruzVerde.pdf"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          text="Aceptar"
          style={{ width: 300, margin: "0 auto" }}
        />
      </PDFDownloadLink>

      <div>
        <PopUp
          open={open}
          onClose={handleClose}
          totalName={totalName}
          typeAndNumberDoc={typeAndNumberDoc}
          officeData={officeData}
        />
      </div>
    </>
  );
};

export default UserSummary;

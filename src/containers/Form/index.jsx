import React from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import OfficeInformation from "../../components/OfficeInformation";
import { OfficeInfoContainer } from "./Form.styles";
import { Container, RowContainer } from "./Form.styles";
import { OFFICES } from "../../components/OfficesData";

import { UserContext } from "../../Contexts/userFormContext";

const documentTypes = [
  {
    value: "C.C",
    label: "Cedula De Ciudadania"
  },
  {
    value: "T.I",
    label: "Tarjeta De Identidad"
  },
  {
    value: "P.P",
    label: "Pasaporte"
  }
];

const Form = () => {
  const [type, setType] = useState();

  const { setStep, setUserData, selectedOffice } = useContext(UserContext);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const { register, handleSubmit } = useForm();

  const officeData = OFFICES.find((office) => office.nombre === selectedOffice);
  return (
    <Container>
      <h2>Ingresa tus datos</h2>
      <form
        onSubmit={handleSubmit((data) => {
          setUserData(data);
          setStep(3);
        })}
      >
        <TextField
          id="standard-select-document"
          select
          label="Select"
          value={type}
          onChange={handleChange}
          variant="standard"
          fullWidth
          style={{ marginBottom: 30 }}
          {...register("documentType")}
        >
          {documentTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Numero de documento"
          variant="standard"
          {...register("documentNumber")}
          type="number"
          fullWidth
          style={{ marginBottom: 30 }}
        />
        <RowContainer>
          <TextField
            {...register("firstName")}
            type="text"
            label="Primer Nombre"
            variant="standard"
            style={{ width: 180, marginBottom: 30 }}
          />
          <TextField
            {...register("secondName")}
            type="text"
            label="Segundo Nombre"
            variant="standard"
            style={{ width: 180, marginBottom: 30 }}
          />
        </RowContainer>
        <RowContainer>
          <TextField
            {...register("lastName")}
            type="text"
            label="Primer Apellido"
            variant="standard"
            style={{ width: 180, marginBottom: 30 }}
          />
          <TextField
            {...register("lastNameTwo")}
            type="text"
            label="Segundo Apellido"
            variant="standard"
            style={{ width: 180, marginBottom: 30 }}
          />
        </RowContainer>
        <OfficeInfoContainer>
          <OfficeInformation officeInfo={officeData} />
        </OfficeInfoContainer>
        <input type="submit" value="Siguiente" className="inputForm" />
      </form>
    </Container>
  );
};

export default Form;

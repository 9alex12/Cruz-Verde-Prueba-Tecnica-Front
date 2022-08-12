import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import RadioGroup from "../../components/RadioGroup";
import { Container } from "./OfficeSearch.styles.js";
import ButtonComponent from "../../components/Button";
import { UserContext } from "../../Contexts/userFormContext";

const OfficeSearch = ({ data, onChangeRadio }) => {
  const [dataFilter, setDataFilter] = useState(data);
  const searchData = (search) =>
    data.filter(({ nombre }) =>
      nombre.toLowerCase().includes(search.toLowerCase())
    );
  const { setStep } = useContext(UserContext);

  return (
    <Container>
      <p>Selecciona la oficina más cercana</p>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="input-with-sx"
          label="Búsqueda"
          variant="standard"
          onChange={(e) => {
            setDataFilter(searchData(e.target.value));
          }}
          fullWidth
        />
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      </Box>
      <RadioGroup data={dataFilter} onChange={onChangeRadio} />
      <ButtonComponent
        text="Seleccionar"
        style={{ width: "209px" }}
        onClick={() => setStep(2)}
      />
    </Container>
  );
};

export default OfficeSearch;

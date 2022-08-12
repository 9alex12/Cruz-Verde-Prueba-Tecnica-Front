import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OfficeInformation from "../OfficeInformation";
import { Container, OfficeContainer } from "./RadioGroup.styles";

const RadioButtonsGroup = ({ data, onChange }) => {
  return (
    <Container>
      <FormControl>
        <FormLabel id="offices" />
        <RadioGroup
          aria-labelledby="offices"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={onChange}
        >
          {data.map((office) => {
            return (
              <OfficeContainer>
                <FormControlLabel
                  value={office.nombre}
                  control={<Radio />}
                  label={<OfficeInformation officeInfo={office} />}
                />
              </OfficeContainer>
            );
          })}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default RadioButtonsGroup;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Logo from "../../assets/CruzVerde.png";
import Button from "../../components/Button";
import { Container, OfficeContainer } from "./PopUp.styles";
import { UserContext } from "../../Contexts/userFormContext";

const PopUp = (props) => {
  const { onClose, selectedValue, open } = props;
  const { totalName, typeAndNumberDoc, officeData } = props;
  const { setStep } = useContext(UserContext);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Container>
        <img src={Logo} alt="Logo Cruz Verde" />
        <DialogTitle color={"#1F9547"}>
          ¡Has solicitado tu turno con éxito!
        </DialogTitle>
        <List sx={{ pt: 0 }}>
          <div>
            <h2>Usuario:</h2>
            <p>{totalName}</p>
          </div>
          <div>
            <h2>Documento:</h2>
            <p>{typeAndNumberDoc}</p>
          </div>
          <OfficeContainer>
            <h2>Sede:</h2>
            <p>{officeData?.nombre}</p>
            <p>{officeData?.direccion}</p>
            <p>Horario: 8:00 a.m - 5:00p.m</p>
          </OfficeContainer>
          <ListItem autoFocus>
            <Button text="Solicitar Nuevo Turno" onClick={() => setStep(0)} />
          </ListItem>
        </List>
      </Container>
    </Dialog>
  );
};

export default PopUp;

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

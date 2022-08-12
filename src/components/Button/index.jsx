import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ style, text, onClick }) => {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 50,
        height: 46,
        "background-color": "#3F3F41",
        ...style
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

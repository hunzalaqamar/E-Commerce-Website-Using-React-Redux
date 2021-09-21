import React from "react";
import { Button } from "react-bootstrap";

function ButtonComp({ Variant, Type, Text, OnClickHandler }) {
  return (
    <Button variant={Variant} type={Type} onClick={OnClickHandler}>
      {Text}
    </Button>
  );
}

export default ButtonComp;

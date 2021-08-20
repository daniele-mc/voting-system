import { Button } from "@material-ui/core";
import React from "react";

function ButtonVoting(props) {
  const colorButton = props.color ? props.color : "primary";
  const variantButton = props.variant ? props.variant : "contained";
  return (
    <Button
      style={{ ...props.style }}
      variant={variantButton}
      color={colorButton}
      type={props.type}
      form={props.form}
      onClick={props.onClick}
      size={props.size}
      style={{
        color: 'white',
        fontWeight: 700,
      }}
    >
      {props.children}
    </Button>
  );
}

export default ButtonVoting;

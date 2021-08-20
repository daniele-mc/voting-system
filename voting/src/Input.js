import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const focusedColor = "#DF73FF";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c0c0cb",
      },
      "&:hover fieldset": {
        borderColor: "#c0c0cb",
      },
      "&.Mui-focused fieldset": {
        borderColor: focusedColor,
      },
    },
  },
});

function Label({ label, isRequired }) {
  return (
    <div style={{ marginTop: 20, marginBottom: 10 }}>
      <label
        className="label"
        style={{ fontWeight: 700, fontSize: 14, color: "#4c4c4e" }}
      >
        {label.toUpperCase()}
        {isRequired && (
          <span style={{ paddingLeft: 5, color: "#ff3355" }}>*</span>
        )}
      </label>
    </div>
  );
}

function Input({
  type,
  label,
  placeholder,
  value,
  isRequired,
  onChange,
  minLength,
}) {
  const commonProps = {
    placeholder,
    value,
    onChange,
  };
  const classes = useStyles();
  const [validateError, setValidateError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const validateInput = (e) => {
    const text = e.target.value;
    if (!text && isRequired === true) {
      setValidateError(true);
      setMessageError("Esse campo é obrigatórioooo");
    } else if (text.length < minLength) {
      setValidateError(true);
      setMessageError(`Este campo requer pelo menos ${minLength} caracteres`);
    } else {
      setValidateError(false);
      setMessageError("");
    }
  };

  return (
    <div className="form-item">
      <Label label={label} isRequired={isRequired} />
      <div>
        {
          {
            input: (
              <TextField
                variant="outlined"
                className={classes.root}
                fullWidth
                required={isRequired}
                onBlur={validateInput}
                error={validateError}
                helperText={validateError ? messageError : " "}
                {...commonProps}
              />
            ),
            textarea: (
              <TextField
                multiline={true}
                rows={4}
                variant="outlined"
                className={classes.root}
                fullWidth
                required={isRequired}
                onBlur={validateInput}
                error={validateError}
                helperText={validateError ? messageError : " "}
                {...commonProps}
              />
            ),
          }[type || "input"]
        }
      </div>
    </div>
  );
}

export default Input;

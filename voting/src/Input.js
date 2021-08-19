import React from "react";
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
  onChange
}) {
  const commonProps = {
    placeholder,
    value,
    required: isRequired,
    onChange
  };
    const classes = useStyles();
  return (
    <div className="form-item" style={{ paddingRight: 20, paddingLeft: 20 }}>
      <Label label={label} isRequired={isRequired} />
      <div>
        {
          {
            input: (
              <TextField
                variant="outlined"
                className={classes.root}
                fullWidth
                {...commonProps}
              />
            ),
            textarea: (
              <TextField
                multiline={true}
                rows={4}
                inputComponent="textarea"
                variant="outlined"
                className={classes.root}
                fullWidth
                {...commonProps}
              />
            ),
          }[type || "input"]
        }
        {/* <Error touched={touched[name]} error={errors[name]} /> */}
      </div>
    </div>
  );
}

export default Input;

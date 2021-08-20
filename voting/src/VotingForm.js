import Input from "./Input";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

function VotingForm(props) {
  const [vt, setVt] = useState({
    statement: "",
    option1: "",
    option2: "",
    option3: "",
  });
  const minLength = 3;

  useEffect(() => {
    if (props.voting.options.length > 0) {
      setVt({
        statement: props.voting.statement,
        option1: props.voting.options[0],
        option2: props.voting.options[1],
        option3: props.voting.options[2],
      });
    }
  }, []);

  const onCancel = () => {
    props.onCancel();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (vt.statement.length >= minLength) {
      const options = [vt.option1, vt.option2, vt.option3].filter(
        (o) => o.trim() !== "" || o.trim() !== null
      );
      props.onUpdate({
        statement: vt.statement,
        options,
      });
    }
  };

  return (
    <div>
      <form
        id="form-id"
        onSubmit={onSubmit}
        style={{ maxWidth: 900, minWidth: 500 }}
      >
        <Input
          type="textarea"
          label="Enunciado"
          placeholder="Digite o enunciado da votação"
          value={vt.statement}
          isRequired={true}
          minLength={minLength}
          onChange={(e) => setVt({ ...vt, statement: e.target.value })}
        />
        <Input
          type="input"
          label="Opção 1"
          placeholder="Opção 1"
          value={vt.option1}
          isRequired={true}
          onChange={(e) => setVt({ ...vt, option1: e.target.value })}
        />
        <Input
          type="input"
          label="Opção 2"
          placeholder="Opção 2"
          value={vt.option2}
          isRequired={true}
          onChange={(e) => setVt({ ...vt, option2: e.target.value })}
        />
        <Input
          type="input"
          label="Opção 3"
          placeholder="Opção 3"
          value={vt.option3}
          isRequired={false}
          onChange={(e) => setVt({ ...vt, option3: e.target.value })}
        />
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            form="form-id"
            style={{ color: "white", fontWeight: 700 }}
          >
            Atualizar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            style={{ marginLeft: 20, fontWeight: 700, color: "white" }}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VotingForm;

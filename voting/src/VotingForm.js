import Input from "./Input";
import React from "react";
import { useState } from "react";

function VotingForm() {
  const [vt, setVt] = useState({
    statement: "",
    option1: "",
    option2: "",
    option3: "",
  });
  const onSubmit = () => {};
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="textarea"
          label="Enunciado"
          placeholder="Digite o enunciado da votação"
          value={vt.statement}
          isRequired={true}
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
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}

export default VotingForm;

<script>
  import { minLengthValidation, requiredValidation } from "./validation.js";
  import { createEventDispatcher } from "svelte";
  import Input from "./Input.svelte";

  export let voting;
  const validate = {
    statement: (value) => minLengthValidation(3, value),
    option1: requiredValidation,
    option2: requiredValidation,
  };
  let errors = {};
  let touched = {};
  const dispatch = createEventDispatcher();

  const { statement, options } = voting || {};
  const [option1, option2, option3] = options || [];
  let vt = { statement, option1, option2, option3 };

  function checkField(name) {
    errors[name] = "";
    if (validate[name] && touched[name]) {
      const value = vt[name];
      errors[name] = validate[name](value) || "";
    }
  }

  function submit() {
    Object.keys(vt).forEach((field) => {
      touched[field] = true;
      checkField(field);
    });
    const errorsIsEmpty = !Object.values(errors).some((v) => v);
    if (errorsIsEmpty) {
      const allOptions = [vt.option1, vt.option2, vt.option3];
      const filledOptions = allOptions.filter((o) => o && o.trim() !== "");
      dispatch("update", {
        statement: vt.statement,
        options: filledOptions,
      });
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  <h2>Formulário</h2>
  <Input
    type="textarea"
    label="Votação"
    bind:value={vt.statement}
    on:input={(touched["statement"] = true)}
    on:blur={(e) => checkField("statement")}
    placeholder="Digite o enunciado da questão"
    isRequired="true"
    error={errors["statement"]}
  />
  <Input
    label="Opção 1"
    bind:value={vt.option1}
    on:input={(e) => (touched["option1"] = true)}
    on:blur={(e) => checkField("option1")}
    placeholder="Digite a 1ª opção"
    isRequired="true"
    error={errors["option1"]}
  />
  <Input
    label="Opção 2"
    bind:value={vt.option2}
    on:input={(e) => (touched["option2"] = true)}
    on:blur={(e) => checkField("option2")}
    placeholder="Digite a 2ª opção"
    isRequired="true"
    error={errors["option2"]}
  />
  <Input
    label="Opção 3"
    bind:value={vt.option3}
    on:input={(e) => (touched["option3"] = true)}
    on:blur={(e) => checkField("option3")}
    placeholder="Digite a 3ª opção"
  />

  <input type="submit" value="Atualizar" />
  <button type="button" on:click={(e) => dispatch("cancel")}>Cancelar</button>
</form>

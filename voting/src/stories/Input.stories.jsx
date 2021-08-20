import React, { useState } from "react";
import Input from "../Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    type: {
        options: ['textarea', 'input'],
        control: { type: 'radio' },
      },
      isRequired: {
          options: [true, false],
          control: { type: 'radio' },
        },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Example1 = Template.bind({});
Example1.args = {
  label: "Enunciado da votação",
  type: "textarea",
  placeholder: "Digite o enunciado da votação",
  isRequired: true,
  minLength: 3,
  value: "UFRN deve adotar modo híbrido de aulas?",
};

export const Example2 = Template.bind({});
Example2.args = {
  label: "Opção 1",
  type: "input",
  placeholder: "Digite a 1ª opção",
  isRequired: false,
  minLength: 3,
  value: "",
};

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Input from "../Input.svelte";
</script>

<Meta
  title="Example/Input"
  component={Input}
  argTypes={{
    type: {
      options: ["textarea", "input"],
      control: { type: "radio" },
    },
    isRequired: {
      options: [true, false],
      control: { type: "radio" },
    },
  }}
/>

<Template let:args>
  <Input {...args} />
</Template>

<Story
  name="Example1"
  args={{
    label: "Enunciado da votação",
    type: "textarea",
    placeholder: "Digite o enunciado da votação",
    isRequired: true,
    value: "UFRN deve adotar modo híbrido de aulas?"
  }}
/>

<Story
  name="Example2"
  args={{
     label: 'Opção 1',
  type: 'input',
  placeholder: 'Digite a 1ª opção',
  isRequired: true,
  value: 'Sim'
  }}
/>

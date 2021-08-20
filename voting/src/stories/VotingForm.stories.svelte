<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingForm from "../VotingForm.svelte";
</script>

<Meta
  title="Example/VotingForm"
  component={VotingForm}
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
  <VotingForm {...args} />
</Template>

<Story
  name="Example1"
  args={{
    voting: {
      statement: "Que horas faremos a reunião de amanhã?",
      options: ["8h00", "8h30", "9h00"],
    },
  }}
/>

<Story
  name="Example2"
  args={{
    voting: {
      statement: "Aonde devemos comer?",
      options: ["Camarões", "Reis Magos", "RU"],
    },
  }}
/>

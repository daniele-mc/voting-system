import VotingCard from "../components/VotingCard.vue";

export default {
  title: "Example/VotingCard",
  component: VotingCard,
  argTypes: {
    state: {
      options: ["open", "close"],
      control: { type: "radio" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VotingCard },
  template: '<VotingCard v-bind="$props" />',
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 2 },
  ],
  title: "Segue o relator?",
  state: "open",
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 2 },
    { option: "Talvez", count: 2 },
  ],
  title: "Continuamos amanha?",
  state: "open",
};

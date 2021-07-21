import Result from "../components/Result.vue";

export default {
  title: "Example/Result",
  component: Result,
};

const Template = (args) => ({
  props: args,
  components: { Result },
  template: '<Result v-bind="$props" />',
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 2 },
  ],
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 2 },
    { option: "Talvez", count: 2 },
  ],
};

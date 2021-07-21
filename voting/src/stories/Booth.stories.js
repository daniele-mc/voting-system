import Booth from "../components/Booth.vue";

export default {
  title: "Example/Booth",
  component: Booth,
};

const Template = (args) => ({
  props: args,
  components: { Booth },
  template: '<Booth v-bind="$props" />',
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  options: ["Sim", "Nao"],
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  options: ["Sim", "Nao", "Talvez"],
};

import React from "react";
import Result from "../Result";

export default {
  title: "Result",
  component: Result,
};

const Template = (args) => <Result {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 7 },
  ],
};

export const Example2 = Template.bind({});
Example2.args = {
  votes: [
    { option: "Sim", count: 3 },
    { option: "Nao", count: 7 },
    { option: "Talvez", count: 3 },
  ],
};

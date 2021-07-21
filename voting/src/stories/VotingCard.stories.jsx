import React from "react";
import VotingCard from "../VotingCard";

export default {
  title: "VotingCard",
  component: VotingCard,
  argTypes: {
    state: {
      options: ['open', 'close'],
      control: { type: 'radio' },
    }}
};

const Template = (args) => <VotingCard {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Nao", count: 7 },
  ],
  title: "Segue o relator?",
  state: "open",
};

export const Example2 = Template.bind({});
Example2.args = {
  votes: [
    { option: "Sim", count: 3 },
    { option: "Nao", count: 7 },
    { option: "Talvez", count: 3 },
  ],
  title: "Continuamos amanha?",
  state: "open",
};
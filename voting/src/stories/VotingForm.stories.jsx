import React, { useState } from "react";
import VotingForm from "../VotingForm";

export default {
  title: "VotingForm",
  component: VotingForm
};

const onPress = () => {
  console.log("click");
};

const onCancel = () => {
  console.log("click");
};

const Template = (args) => {
  return <VotingForm {...args} />;
};

export const Example1 = Template.bind({});
Example1.args = {
  voting: {
    statement: "Que horas faremos a reunião de amanhã?",
    options: ["8h", "8h30", "9h"],
  },
  onUpdate: onPress(),
  onCancel: onCancel(),
};

export const Example2 = Template.bind({});
Example2.args = {
  voting: {
    statement: "Aonde devemos comer?",
    options: ["Camarões", "Reis Magos", "RU"],
  },
  onUpdate: onPress(),
  onCancel: onCancel(),
};

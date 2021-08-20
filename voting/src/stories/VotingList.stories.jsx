import React, { useState } from "react";
import VotingList from "../VotingList";

export default {
  title: "VotingList",
  component: VotingList,
  argTypes: {},
};

const onPress = () => {
  console.log("click");
};

const onCancel = () => {
  console.log("click");
};

const Template = (args) => {
  return <VotingList {...args} />;
};

export const Example1 = Template.bind({});
Example1.args = {
};

export const Example2 = Template.bind({});
Example2.args = {
};
import React from 'react';
import Booth from '../Booth';

export default {
  title: 'Booth',
  component: Booth,
};

const select = () => {
    console.log('click');
  };

const Template = (args) => <Booth {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    options: ['Sim', 'Nao'],
    onSelect: select()
};

export const Example2 = Template.bind({});
Example2.args = {
    options: ['Sim', 'Nao', 'Talvez'],
    onSelect: select()
};

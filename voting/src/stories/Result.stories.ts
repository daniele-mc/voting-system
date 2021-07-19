
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultComponent } from 'src/app/result.component';

export default {
  title: 'Result',
  component: ResultComponent
} as Meta;

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
  props: args,
});

export const Exemple1= Template.bind({});
Exemple1.args = {
  votes: [{option: 'Sim', count: 1}, {option: 'Nao', count: 2}]
};

export const Exemple2= Template.bind({});
Exemple2.args = {
    votes: [{option: 'Sim', count: 1}, {option: 'Nao', count: 2}, {option: 'Talvez', count: 2}]
};

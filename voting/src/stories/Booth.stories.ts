
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from 'src/app/booth.component';

export default {
  title: 'Booth',
  component: BoothComponent
} as Meta;

const Template: Story<BoothComponent> = (args: BoothComponent) => ({
  props: args,
});

export const Exemple1= Template.bind({});
Exemple1.args = {
  options: ['Sim', 'Nao']
};

export const Exemple2= Template.bind({});
Exemple2.args = {
  options: ['Sim', 'Nao', 'Talvez']
};

import { Story, Meta } from '@storybook/angular/types-6-0';
import { VotingFormComponent } from 'src/app/voting-form.component';
import { InputComponent } from 'src/app/input.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'VotingForm',
  component: VotingFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<VotingFormComponent> = (args: VotingFormComponent) => ({
  props: args,
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  vote: {
    statement: 'Que horas faremos a reunião de amanhã?',
    votes: ['8h00', '8h30', '9h00'],
  },
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  vote: {
    statement: 'Aonde devemos comer?',
    votes: ['Camarões', 'Reis Magos', 'RU'],
  },
};

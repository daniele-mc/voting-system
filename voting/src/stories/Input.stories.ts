import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from 'src/app/input.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    type: {
      options: ['textarea', 'input'],
      control: { type: 'radio' },
    },
    isRequired: {
        options: [true, false],
        control: { type: 'radio' },
      },
  },
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  label: 'Enunciado da votação',
  type: 'textarea',
  placeholder: 'Digite o enunciado da votação',
  isRequired: true,
  minlength: 3,
  value: 'UFRN deve adotar modo híbrido de aulas?',
  name: 'statement',
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  label: 'Opção 1',
  type: 'input',
  placeholder: 'Digite a 1ª opção',
  isRequired: true,
  minlength: 0,
  value: 'Sim',
  name: 'option1',
};

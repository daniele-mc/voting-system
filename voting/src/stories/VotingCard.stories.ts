import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from 'src/app/booth.component';
import { ResultComponent } from 'src/app/result.component';
import { VotingCardComponent } from 'src/app/voting-card.component';


export default {
  title: 'VotingCard',
  component: VotingCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [BoothComponent, ResultComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    state: {
      options: ['open', 'close'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
});

export const Exemple1 = Template.bind({});
Exemple1.args = {
  votes: [
    { option: 'Sim', count: 6 },
    { option: 'Nao', count: 3 },
  ],
  title: 'Segue o relator?',
  state: 'open'
};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  title: 'Continuamos amanha?',
  state: 'open',
  votes: [
    { option: 'Sim', count: 8 },
    { option: 'Nao', count: 4 },
    { option: 'Talvez', count: 7 },
  ],
};

import { Story, Meta } from '@storybook/angular/types-6-0';
import { VotingListComponent } from 'src/app/voting-list.component';
import { VotingFormComponent } from 'src/app/voting-form.component';
import { InputComponent } from 'src/app/input.component';
import { VotingCardComponent } from 'src/app/voting-card.component';
import { BoothComponent } from 'src/app/booth.component';
import { ResultComponent } from 'src/app/result.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'VotingList',
  component: VotingListComponent,
  decorators: [
    moduleMetadata({
      declarations: [VotingFormComponent, InputComponent, VotingCardComponent, BoothComponent, ResultComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<VotingListComponent> = (args: VotingListComponent) => ({
  props: args,
});

export const Exemple1 = Template.bind({});
Exemple1.args = {

};

export const Exemple2 = Template.bind({});
Exemple2.args = {
  
};
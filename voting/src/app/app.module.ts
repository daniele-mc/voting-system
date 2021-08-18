import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoothComponent } from './booth.component';
import { ResultComponent } from './result.component';
import { VotingCardComponent } from './voting-card.component';
import { InputComponent } from './input.component';
import { VotingFormComponent } from './voting-form.component';
import { VotingListComponent } from './voting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoothComponent,
    ResultComponent,
    VotingCardComponent,
    InputComponent,
    VotingFormComponent,
    VotingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

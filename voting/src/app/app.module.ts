import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoothComponent } from './booth.component';
import { ResultComponent } from './result.component';
import { VotingCardComponent } from './voting-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoothComponent,
    ResultComponent,
    VotingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

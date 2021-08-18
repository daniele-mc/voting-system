import { Component } from '@angular/core';
import { VotingService } from './voting-list.service';

@Component({
  selector: 'voting-list',
  template: `
    <div *ngIf="mode === 'view'">
      <h2>Votações</h2>
      <button (click)="addVote()">Nova votação</button>

      <p *ngFor="let vote of vtService.votes; index as i">
        <b>P: </b> {{ vote.statement }}
        <button className="m5" (click)="editVote(i)">Edita</button>
        <button className="m5" (click)="removeVote(i)">Remove</button>
        <br />
        <b>R: </b>
        <span *ngFor="let o of vote.votes; index as i">
          {{ o }}
          <span *ngIf="i < vote.votes.length - 1">/ </span>
        </span>
        <br />
        <button className="m5" (click)="chooseVoting(i)">Votar</button>
      </p>
    </div>

    <div *ngIf="mode === 'form'">
      <h2>Formulário da votação</h2>
      <voting-form
        [vote]="vtService.votes[current]"
        (update)="updateChanges($event)"
        (cancel)="cancelChanges()"
      ></voting-form>
    </div>

    <div *ngIf="mode === 'voting'">
      <h2>Votação</h2>
      <voting-card title="title" [votes]="votes"></voting-card>
      <button type="button" (click)="home()">
        Voltar para tela de votações
      </button>
    </div>
  `,
})
export class VotingListComponent {
  current = 0;
  title = '';
  votes: any = [];
  mode = 'view'

  constructor(public vtService: VotingService) {}

  addVote() {
    this.mode = 'form';
    this.vtService.createVoting();
    this.current = this.vtService.votes.length - 1;
  }

  editVote(index: number) {
    this.current = index;
    this.mode = 'form';
  }

  removeVote(index: number) {
    this.vtService.deleteVoting(index);
  }

  updateChanges(vote: any) {
    this.vtService.updateVoting(vote, this.current);
    this.mode='view';
  }

  cancelChanges() {
    if (this.mode === 'form') {
      this.vtService.deleteVoting(this.vtService.votes.length - 1);
    }
    this.mode='view';
  }

  chooseVoting(index: number) {
    this.votes = [];
    this.mode = 'voting';
    this.vtService.votes[index].votes.map((item) => {
      this.votes.push({ option: item, count: 0 });
    });
  }

  home() {
    this.mode='view';
  }
}

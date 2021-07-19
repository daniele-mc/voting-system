import { Component, Input } from '@angular/core';

@Component({
  selector: 'voting-card',
  template: `
    <div *ngIf="state === 'open'; else close">
      <div class="panel question">
        <p class="m5">{{ title }}</p>
        <booth [options]="options" (select)="select($event)"> </booth>
      </div>
      <button (click)="endVotation()" class="submitBtn">
        Encerrar votacao
      </button>
    </div>
    <ng-template #close>
      <div class="panel results">
        <result [votes]="votes"></result>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .panel {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
      }
      .question {
        background-color: azure;
      }
      .results {
        background-color: beige;
      }
      .submitBtn {
        margin: 15px;
      }
    `,
  ],
})
export class VotingCardComponent {
  @Input() title: string | undefined;

  @Input() votes!: Array<{ option: string; count: number }>;
    // votes = [
    //   { option: 'Sim', count: 6 },
    //   { option: 'Nao', count: 3 },
    // ];
  state = 'open';

  endVotation() {
    this.state = 'close';
  }

  select(index: any) {
    this.votes[index].count++;
  }

  public get options(): string[] {
    return this.votes.map((vote) => vote.option);;
  }
}

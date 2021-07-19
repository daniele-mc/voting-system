import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  template: `
    <h2 class="m5">Escolhas</h2>
    <p *ngFor="let vote of votes; index as i">
      <strong>{{ vote.option }}:</strong>
      <br />
      {{ vote.count }} votes ( {{ calcPercentual(vote.count) }} %)
    </p>
  `,
})
export class ResultComponent {
@Input() votes!: Array<{ option: string, count: number }>

    calcPercentual(number: number) {
        let total = 0;
        this.votes.map(vote => {
            total += vote.count;
        })
        const percentual = Math.round((number/total) * 100)
        return percentual;
    }
}

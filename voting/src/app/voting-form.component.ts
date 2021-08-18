import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface VotingType {
  statement: string;
  votes: string[];
}

@Component({
  selector: 'voting-form',
  template: `
    <form #qstForm="ngForm" (ngSubmit)="qstForm.form.valid && onSubmit()">
      <voting-input
        label="Enunciado da votação"
        type="textarea"
        placeholder="Digite o enunciado da votação"
        [isRequired]="true"
        [minlength]="3"
        name="statement"
        [(value)]="vt.statement"
      ></voting-input>

      <voting-input
        type="input"
        label="Opção 1"
        placeholder="Digite a 1ª opção"
        [isRequired]="true"
        name="option1"
        [(value)]="vt.option1"
      ></voting-input>

      <voting-input
        type="input"
        label="Opção 2"
        placeholder="Digite a 2ª opção"
        [isRequired]="true"
        name="option2"
        [(value)]="vt.option2"
      ></voting-input>

      <voting-input
        type="input"
        label="Opção 3"
        placeholder="Digite a 3ª opção"
        [isRequired]="false"
        name="option3"
        [(value)]="vt.option3"
      ></voting-input>

      <input type="submit" value="Atualizar" />
      <button type="button" (click)="cancel.emit()">Cancelar</button>
    </form>
  `,
})
export class VotingFormComponent implements OnInit {
  @Input() vote!: VotingType;
  @Output() update = new EventEmitter();
  @Output() cancel = new EventEmitter();
  vt!: { statement: string; option1: string; option2: string; option3: string };

  ngOnInit() {
    const { statement, votes } = this.vote || {};
    const [option1, option2, option3] = votes || [];
    this.vt = {
      statement,
      option1,
      option2,
      option3,
    };
  }

  onSubmit() {
    const votes = [this.vt.option1, this.vt.option2, this.vt.option3].filter(
      (o) => o && o.trim() !== ''
    );
    this.update.emit({
      statement: this.vt.statement,
      votes,
    });
  }
}

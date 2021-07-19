import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'booth',
    template: `
      <button
        class="m5"      
        *ngFor="let option of options; index as i"
        (click)="select.emit(i)"
      >
        {{ option }}
      </button>
    `,
    styles: [
      `
        .selected {
          font-weight: bold;
        }
      `
    ]
  })
  export class BoothComponent {
    @Input() options: string[] | undefined
    @Output() select = new EventEmitter<number>()

  }

 
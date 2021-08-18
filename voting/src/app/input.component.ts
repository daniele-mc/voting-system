import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'voting-input',
    template: `
    <div class="form-item">
      <form>
        <label>
          {{ label }}
          <span *ngIf="isRequired" style="color: red">*</span>
        </label>

        <div>
        <textarea
          #txtAreaElm="ngModel"
          rows="4"
          [hidden]="type !== 'textarea'"
          [placeholder]="placeholder"
          [required]="isRequired"
          [minlength]="minlength"
          [(ngModel)]="value"
           name="name"
          (change)="valueChange.emit(txtAreaElm.value)"
          (blur)="valueChange.emit(txtAreaElm.value)"       
        ></textarea>

        <input
          #inputElm="ngModel"
          type="text"
          [placeholder]="placeholder"
          [required]="isRequired"
          [(ngModel)]="value"
          name="name"
          (change)="valueChange.emit(inputElm.value)"
          (blur)="valueChange.emit(inputElm.value)"
          [hidden]="type !== 'input'"
        />

        <div class="error">{{ error(txtAreaElm) || error(inputElm) }}</div>

      </div>
      </form>
    </div>
  `,
    styles: [
        `
      .form-item {
        display: flex;
        margin-bottom: 1.7rem;
      }
      label {
        min-width: 6rem;
        text-align: right;
        margin-right: 5px;
        font-weight: bold;
      }
      .error {
        position: absolute;
        color: red;
        font-style: italic;
        font-size: smaller;
      }
      input[type='text'],
      textarea {
        border-radius: 3px;
        font-size: 12pt;
        font-family: Arial, Helvetica, sans-serif;
        width: 18rem;
        border: 1px solid #aaa;
        padding: 0.2em;
        color: #444;
      }
      .ng-invalid.ng-touched {
        border-color: red;
      }
    `,
    ],
})
export class InputComponent {
    @Input() label!: string;
    @Input() type!: string;
    @Input() placeholder!: string;
    @Input() isRequired!: boolean;
    @Input() minlength!: number;
    @Input() value!: string;
    @Input() name!: string;
    @Output() valueChange = new EventEmitter<string>()

    error(elm: NgModel) {
        if (elm.invalid && elm.touched) {
            if (elm.errors!.required) {
                return 'Este campo é obrigatório.'
            }
            if (elm.errors!.minlength) {
                return `Este campo requer pelo menos ${this.minlength} caracteres`
            }
        }
        return null;
    }

}

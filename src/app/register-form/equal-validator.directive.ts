import { Input, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName], [validateEqual][formControl], [validateEqual][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true}]
})
export class EqualValidatorDirective implements Validator {
  @Input() validateEqual: string;
  equalField: FormControl;

  validate(control: AbstractControl): { [key: string]: any } {
    let value = control.value;
    this.equalField = control.root.get(this.validateEqual) as FormControl;
    this.equalField.valueChanges.subscribe(() => {
      control.updateValueAndValidity();
    });

    if (this.equalField && value !== this.equalField.value) {
      return {'validateEqual': {value: control.value}};
    }
    return null;
  }
}

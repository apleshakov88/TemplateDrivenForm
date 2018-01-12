import { Input, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[forbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    let isError = null;
    if (this.forbiddenName && control.value) {
      if (this.forbiddenName.toLowerCase() === control.value.toLowerCase()) {
        return {'forbiddenName': {value: control.value}};
      }
    }
    return isError;
  }
}

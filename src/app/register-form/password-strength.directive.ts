import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordStrength][formControlName], [validateEqual][formControl], [passwordStrength][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordStrengthDirective, multi: true}]
})
export class PasswordStrengthDirective implements Validator {
  static getStrength(password) {
    let strength = 0;
    let rules = [/[A-Z]/, /[a-z]/, /[0-9]/, /[!@#$%^&\*\?_~]/];
    if (password.length > 6) {
      rules.forEach(function(rule) {
        if (rule.test(password)) {
          strength++;
        }
      });
    }
    return strength;
  }
  
  validate(control: AbstractControl): {[key: string]: any} {
    let isError = null;
    let strength;
    if (control.value) {
      strength = PasswordStrengthDirective.getStrength(control.value)
      if (strength < 2) {
        return { 'passwordStrength': {value: control.value }};
      }
    }
    return isError;
  }
}

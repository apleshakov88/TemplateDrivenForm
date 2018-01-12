import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_ASYNC_VALIDATORS } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/first';

@Directive({
  selector: '[asyncEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: AsyncEmailValidator, multi: true}]
})
export class AsyncEmailValidator implements Validator {
  validateUniqueEmailObservable(control: AbstractControl) {
    return new Observable(observer => {
      if( control.value === 'asd@asd.asd' ) {
        observer.next({ 'asyncEmail': { value: control.value } });
      } else {
        observer.next(null);
      }
    });
  }

  validate(control: AbstractControl): Observable<{[key: string]: any}> {
    return this.validateUniqueEmailObservable(control).debounceTime(500).first();
  }
}


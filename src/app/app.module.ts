import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { PasswordStrengthDirective } from './register-form/password-strength.directive';
import { ForbiddenValidatorDirective } from './register-form/forbidden-validator.directive';
import { EqualValidatorDirective } from './register-form/equal-validator.directive';
import { AsyncEmailValidator } from './register-form/async-email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenValidatorDirective,
    EqualValidatorDirective,
    RegisterFormComponent,
    PasswordStrengthDirective,
    AsyncEmailValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

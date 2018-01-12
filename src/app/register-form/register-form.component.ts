import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('registerForm') registerForm: HTMLFormElement;
  defaultModel = {
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreed: ''
  };
  registerModel = {...this.defaultModel};
  changeHandlers = {
    email: () => {
      console.log('>>> email was changed');
    }
  };

  emallTimerChangeTimer;
  emailValidState: boolean = true;

  modelChangeHandlers = {
    email: (email) => {
      clearTimeout(this.emallTimerChangeTimer);
      this.emallTimerChangeTimer = setTimeout(() => {
        this.emailValidState = email.valid;
      }, 300);
    },
    gender: () => {
      console.log(111)
      this.registerModel.gender = 'male';
    }
  };

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {}

  onSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log('E.G. >>> set "invalid required" for email field from code');
    this.registerForm.controls['email'].setErrors({'required': true});
  }

  onReset(e) {
    e.preventDefault();
    console.log('reset');
    this.registerModel = {...this.defaultModel};
  }
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  userName: string = '';

  getUserName(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
  setUserName() {
    this.userName = 'Ashan';
  }

  name = new FormControl();
  password = new FormControl();
  email = new FormControl();

  getValue() {
    console.log(this.name.value);
    console.log(this.password.value);
    console.log(this.email.value);
  }

  setValue() {
    this.name.setValue('peter');
    this.password.setValue('1234');
    this.email.setValue('test@test.com');
  }

  detailsForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    fpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    femail: new FormControl('', [Validators.required, Validators.email]),
  });

  submitData() {
    console.log(this.detailsForm.value);
  }

  get fname() {
    return this.detailsForm.get('fname');
  }
  get fpassword() {
    return this.detailsForm.get('fpassword');
  }
  get femail() {
    return this.detailsForm.get('femail');
  }

  userData: any;
  addUser(val: NgForm) {
    this.userData = val;
  }
}

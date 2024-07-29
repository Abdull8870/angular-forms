import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators }from '@angular/forms';


function validatePassword(control:AbstractControl){

  const password=control.get('password')?.value;
  const confirmPassword=control.get('confirm-password')?.value;

  if(password===confirmPassword) return null;

  else return { passwordNotEqual:true }

}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  form=new FormGroup({
    email:new FormControl('',{validators:[Validators.required,Validators.email]}),
    passwords:new FormGroup({
      password: new FormControl(''),
      "confirm-password": new FormControl(''),
    },{validators:validatePassword}),
    "first-name": new FormControl(''),
    "last-name": new FormControl(''),
    address: new FormGroup({
      street:new FormControl(''),
      number:new FormControl(''),
      "postal-code": new FormControl(''),
      city: new FormControl(''),
    }),
    role: new FormControl(''),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    terms: new FormControl('')
  });

  onSubmit(){
    if(this.form.invalid){return}
    console.log(this.form)
  }

}

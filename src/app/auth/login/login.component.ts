import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form=new FormGroup({
    email:new FormControl('',{
      validators:[Validators.email,Validators.required]
    }),
    password:new FormControl('',{
      validators:[Validators.minLength(5),Validators.required]
    })
  })

  get emailIsInvalid(){
    return(this.form.controls.email.touched && 
      this.form.controls.email.dirty && this.form.controls.email.invalid);
  }

  
  get passwordIsInvalid(){
    return(this.form.controls.password.touched && 
      this.form.controls.password.dirty && this.form.controls.password.invalid);
  }

  onSubmit() {
  
    const email=this.form.value.email;
    const password=this.form.value.password;

  }

}

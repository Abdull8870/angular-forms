import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

 private form=viewChild.required<NgForm>('form'); 
 private destroyRef=inject(DestroyRef);

constructor(){

  afterNextRender(()=>{

    const savedForm=window.localStorage.getItem('saved-email');
    
    if(savedForm !==null && savedForm !==undefined){
      console.log(savedForm)
      const tmpEmail=savedForm;
      setTimeout(()=>{
        this.form().controls['email'].setValue(tmpEmail);
      },1)
    }

   const subscription=this.form().valueChanges?.subscribe({
     next:(value)=>{
      window.localStorage.setItem(
        'saved-email',value.email);
     }
   });

   this.destroyRef.onDestroy(()=>{
      subscription?.unsubscribe();
   })

  })
  
}

onSubmit(formData: NgForm) {

  if(formData.form.invalid){
    return;
  }
 const email=formData.form.value.email;
 const password=formData.form.value.password;
 formData.form.reset();


 }



}

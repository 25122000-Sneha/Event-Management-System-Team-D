import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpService } from '../../services/http.service';
 
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
 
  itemForm: FormGroup;
  formModel:any={role:null,email:'',password:'',username:''};
  showMessage:boolean=false;
  userError$: Observable<string> = of('');
  userSuccess$: Observable<string> = of('');
 
  responseMessage: any;
  constructor(public router:Router, private formBuilder: FormBuilder,private httpService:HttpService) {
   
    this.itemForm = this.formBuilder.group({
 
      role:[this.formModel.role,[Validators.required]],
      email:[this.formModel.email,[Validators.required,this.emailValidations]],
      password:[this.formModel.password,[Validators.required,this.passwordValidations]],
      username:[this.formModel.username,[Validators.required,this.noSpaceValidations]]
     
  });
}
 
passwordValidations(control: AbstractControl): ValidationErrors | null {
 
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])([a-zA-Z\d!@#%$%^&*]){8,}$/;
 
  if (!passwordRegex.test(control.value)) {
    return {  invalidPassword: true };
  } else {
    return null;
  }
}
 
emailValidations(control: AbstractControl): ValidationErrors | null {
 
  let emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-z]{2,}/;
 
  if (!emailRegex.test(control.value)) {
    return {  invalidEmail: true };
  } else {
    return null;
  }
}
 
noSpaceValidations(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value as string;
 
  if (controlValue.indexOf(' ')>= 0) {
    return {  NoSpaceValidator: true };
  } else {
    return null;
  }
}
 
  ngOnInit(): void {
  }
  onRegister()
  {
  //complete this function
    if(this.itemForm.valid){
      this.httpService.registerUser(this.itemForm.value).subscribe(
        (res: any) => {
          console.log("success");
          this.userSuccess$ = of("User created successfully");
        },
        (error) => {
          console.log("error");
          this.userError$ = of("Unable to create user");
        }
      )
    }
    else{
      this.itemForm.markAllAsTouched();
    }
  }
 
 
}
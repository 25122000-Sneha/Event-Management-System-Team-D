import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  itemForm: FormGroup;
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;
  constructor(public router:Router, private formBuilder: FormBuilder)
    {
      this.itemForm = this.formBuilder.group({
        //compelete this
        username : ["", [Validators.required, this.noSpaceValidations]],
        password : ["", [Validators.required, this.passwordIsNotValid]]
    });
  }
 
 
  passwordIsNotValid(control : AbstractControl) : {[key : string] : boolean} | null
  {
    let passwordVal = control.value as string;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])([a-zA-Z\d!@#%$%^&*]){8,}$/;
    if(!passwordRegex.test(passwordVal))
    {
      return {invalidPassword : true};
    }
    return null;
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
  onLogin() {
  //compelete this
}
 
registration()
  {
     //compelete this
  }
}


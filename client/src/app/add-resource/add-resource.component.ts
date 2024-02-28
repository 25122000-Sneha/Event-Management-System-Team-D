import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {

  itemForm: FormGroup; 
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  resourceList:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  constructor(public router:Router,private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm = init this form

   
  }
  ngOnInit(): void {
  
    
  }

 
  onSubmit()
  {
   //complete this function by calling api 
   
    }
    
  

  getResources() {
     //complete this function 
  }
  
}

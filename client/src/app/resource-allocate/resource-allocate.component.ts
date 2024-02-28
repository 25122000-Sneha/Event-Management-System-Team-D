import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-resource-allocate',
  templateUrl: './resource-allocate.component.html',
  styleUrls: ['./resource-allocate.component.scss']
})
export class ResourceAllocateComponent implements OnInit {
  itemForm: FormGroup; 
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  resourceList:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  eventList: any=[];
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm =init form 
   
  }
  ngOnInit(): void {

  }
 
  onSubmit()
  {
    //complete this function
  }
    
    getEvent() {
     //complete this function
    }

  getResources() {
     //complete this function
  }
  
}

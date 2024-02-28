import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  itemForm: FormGroup; 
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  eventList:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  constructor(public router:Router, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm = inti this form 

   
  }
  ngOnInit(): void {

    this.getEvent();
  }
  getEvent() {
//compete this function
  }

 
  onSubmit()
  {
   //compete this function
  }

  
}

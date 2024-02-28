import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {

  itemForm: FormGroup; 
  formModel:any={status:null};
  showError:boolean=false;
  errorMessage:any;
  eventObj:any=[];
  assignModel: any={};

  showMessage: any;
  responseMessage: any;
  isUpdate: any=false;;
  constructor(public router:Router, public httpService:HttpService, private formBuilder: FormBuilder, private authService:AuthService) 
    {
      // this.itemForm =complete this form init
   
  }
  ngOnInit(): void {

  
  }
  searchEvent() {
  //complete this function
    
  
  }

 
  onSubmit()
  {
    //complete this function
  }
  edit(val:any)
  {
    this.isUpdate=true;
    let dateTime=new Date(val.dateTime);
    this.itemForm.patchValue({
    //complete this function

    })
  }

  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  itemForm: FormGroup;
  formModel: any = { status: null };
  showError: boolean = false;
  errorMessage: any;
  eventList: any = [];
  assignModel: any = {};

  showMessage: any;
  responseMessage: any;

  error$ : Observable<String> = of('');
  success$ : Observable<String> = of('');
  userList$: Observable<any>;
  constructor(public router: Router, private formBuilder: FormBuilder, private authService: AuthService, private httpService:HttpService) {
    // this.itemForm = inti this form 
    if(authService.getRole != 'PLANNER'){      
      router.navigateByUrl('dashboard')
    }
    this.itemForm = formBuilder.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      dateTime:['',[Validators.required]],
      location:['',[Validators.required]],
      status:['',[Validators.required]],
      user:['',[Validators.required]]
    });
  }
  ngOnInit(): void {

    // this.getEvent();
    this.getUsers();
  }
  getUsers() {
     //complete this function
     this.userList$  = this.httpService.getAllUser();
  }


  onSubmit() {
    //compete this function
    
    if(this.itemForm.valid){
      console.log(this.itemForm.value);
      
      this.httpService.createEvent(this.itemForm.value).subscribe((data: any)=>{
        console.log("addEvent");
        this.success$ = of("Event created successfully.")
      },(error)=>{
        console.log("addEvent Error");
        this.error$ = of('Unable to create Event.');
      });
    }else{
      alert("Form is not valid.");
      this.itemForm.markAllAsTouched();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
// import { HttpService } from '../../services/http.service';
// import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {

  itemForm: FormGroup;
  formModel: any = { status: null };
  showError: boolean = false;
  errorMessage: any;
  eventObj$: Observable<any> = of([]);
  assignModel: any = {};

  showMessage: any;
  responseMessage: any;
  isUpdate: any = true;

  inputMessage: string = '';
  userList$: Observable<any> = of([]);
  errorMsg$: Observable<String> = of('');
  responseMsg$: Observable<String> = of('');
  event:any;
  constructor(public router: Router, private formBuilder: FormBuilder, private httpService: HttpService) {
    // this.itemForm =complete this form init
    this.itemForm = formBuilder.group({
      eventID: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateTime: ['', [Validators.required]],
      location: ['', [Validators.required]],
      status: ['', [Validators.required]],
      user: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {


  }
  searchEvent() {
    //complete this function
    this.eventObj$ = this.httpService.getEventById(this.inputMessage);
  }


  onSubmit() {
    //complete this function
    if (this.itemForm.valid) {
      console.log(this.inputMessage);
      this.httpService.updateEvent(this.itemForm.value, this.inputMessage).subscribe(
        (res: any) => {
          this.responseMsg$ = of('Event updated successfully');
          this.searchEvent();
        },
        (error: any) => {
          this.errorMsg$ = of('Unable to update event');
        }
      )
      this.isUpdate = true;
    }else{
      this.itemForm.markAllAsTouched();
    }
  }
  edit(val: any) {
    this.isUpdate = false;
    let dateTime = new Date(val.dateTime);
    // this.itemForm.patchValue({
    // //complete this function
    // })

    this.eventObj$.subscribe((data: any) => {
      this.event = data[0];
      this.itemForm.patchValue(data[0]);
      console.log(data);
    });
  }
}
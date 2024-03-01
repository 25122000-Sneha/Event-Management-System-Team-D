import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  formModel: any = {eventID:null, status: null };
  showError: boolean = false;
  errorMessage: any;
  eventObj: any = [];
  allocations: any = [];
  assignModel: any = {};

  showMessage: any;
  responseMessage: any;
  isUpdate: any = false;
  listOfAllocation : any = [];
  constructor(public router: Router, public httpService: HttpService, private formBuilder: FormBuilder, private authService: AuthService) {
    if(authService.getRole != 'CLIENT'){      
      router.navigateByUrl('dashboard')
    }
  }
  ngOnInit(): void {


  }
  searchEvent() {
    debugger;
    if (this.formModel.eventID != null) {
      this.isUpdate = false;
      console.log(this.formModel.eventID);
      
      this.httpService.getBookingDetails(this.formModel.eventID).subscribe((data: any) => {
        this.eventObj = data;
        console.log(this.eventObj);
      }, error => {
        // Handle error
        this.showError = true;
        this.errorMessage = "An error occurred.. Please try again later.";
        console.error('Login error:', error);
      });

      this.httpService.getAllAllocationByEventId(this.formModel.eventID).subscribe((data:any)=>{
        this.listOfAllocation = data;
        console.log(data);
      })
    }

  }

}


import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-resource-allocate',
  templateUrl: './resource-allocate.component.html',
  styleUrls: ['./resource-allocate.component.scss']
})
export class ResourceAllocateComponent {
  itemForm: FormGroup;
  formModel: any = { status: null };
  showError: boolean = false;
  errorMessage: string = '';
  assignModel: any = {};

  showMessage: boolean = false;
  responseMessage: string ='';
  eventList$: Observable<any> = of([]);
  resourceList$: Observable<any> = of([]);
  filteredResourceList$:Observable<any> = of([]);



  constructor(public router: Router, private formBuilder: FormBuilder, private httpService: HttpService) {
    this.itemForm = this.formBuilder.group({
      resource: ['', [Validators.required, this.notNegitive]],
      quantity: ['', [Validators.required, this.notNegitive]],
      event: ['', [Validators.required]]

    })

  }
  ngOnInit(): void {
    this.getEvent();
    this.getResources();
    this.filteredResourceList$ = this.resourceList$.pipe(
      map((arr:any)=>{
        return arr.filter(r => r.availability)
      })
    );
  }

  notNegitive(control: AbstractControl): ValidationErrors | null {


    if (control.value < 0) {
      return { nNegitive: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    //complete this function
    if(this.itemForm.valid){
      this.httpService.addAllocateResource(this.itemForm.value).subscribe(
        (data: any)=>{
          this.showMessage = true;
          this.responseMessage = 'Allocation successfully done';
        },
        (error: any)=>{
          this.showError = true;
          this.errorMessage = 'Unable to allocate resource.';
        }
      );
    }
  }

  getEvent() {
    //complete this function
    this.eventList$ = this.httpService.getEvents();
  }

  getResources() {
    //complete this function
    this.resourceList$ = this.httpService.getResources();
    this.filteredResourceList$ = this.resourceList$;
  }


}
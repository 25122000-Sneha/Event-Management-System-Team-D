import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {
  showUserTable:boolean=true;
  userList$: Observable<any>;
  eventList$: Observable<any>;
  constructor(private httpService:HttpService){
    
  }
  ngOnInit(): void {

    // this.getEvent();
    this.getUsers();
    this.getEvents();
  }
  getEvents() {
    this.eventList$=this.httpService.GetAllevents();
  }
  getUsers() {
     //complete this function
     this.userList$  = this.httpService.getAllUser();
  }
}

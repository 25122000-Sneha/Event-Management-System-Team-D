import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
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
  eventList2$: Observable<any>;
  roleName:string='';
  constructor(private httpService:HttpService,private authService:AuthService){
    this.roleName=authService.getRole;
  }
  ngOnInit(): void {

    // this.getEvent();
    this.getUsers();
    this.getEvents();
    this.getAllEvents()
  }
  getEvents() {
    this.eventList$=this.httpService.GetAllevents();
  }
  getUsers() {
     //complete this function
     this.userList$  = this.httpService.getAllUser();
  }
  getAllEvents() {
    //complete this function
    this.eventList2$  = this.httpService.getAllEventsStaff();
 }
}

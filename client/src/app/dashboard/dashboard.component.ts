import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showUserTable:boolean=true;
  userList$: Observable<any>;
  eventList$: Observable<any>;
  eventList2$: Observable<any>;
  roleName:string='';
  username:string = '';
  email:string='';
  constructor(private httpService:HttpService,private authService:AuthService){
    this.roleName=authService.getRole;
    this.username = authService.getUsername;
    this.email = authService.getEmail;

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

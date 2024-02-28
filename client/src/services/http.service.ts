import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName=environment.apiUrl;
  constructor(private http : HttpClient) {
 
   }
 
  getEventById(eventId:any):Observable<any> {
    //complete this function
  
  }
  updateEvent(newEvent:any,eventId:any):Observable<any> {
   //complete this function

  }
  // assignDriver(driverid: any, cargoId: any): Observable<any> {
  //  //complete this function
  // }
 
  // getAssignOrders(driverId:any):Observable<any> {
  // //complete this function
  // }
  getResources():Observable<any> {
   //complete this function
  
  }
  addAllocateResource(data:any):Observable<any>{
   
  }
 
  addResource(data : any): Observable<any> {

  }
 
  getEvents():Observable<any> {
  //complete this function

  }
  addEvent(details:any):Observable<any> {
  //complete this function
  console.log(details);

  }
  Login(details:any):Observable<any> {
  //complete this function
 
  }
  registerUser(details:any):Observable<any> {
   //complete this function
   console.log(details);
   
  
  }
  getAllUser():Observable<any>{
   
  }
}
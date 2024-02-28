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
    return this.http.get(`${this.serverName}/api/staff/event-details/`+eventId).pipe(
      map((data: any)=>{
        if(Array.isArray(data)){
          return data;
        }else{
          return [data];
        }
      })
    );
  }
  updateEvent(newEvent:any,eventId:any):Observable<any> {
   //complete this function
   return this.http.put<Event>(`${this.serverName}/api/staff/update-setup/${eventId}`,newEvent);
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
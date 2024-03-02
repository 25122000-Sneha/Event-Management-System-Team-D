import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  // getEventById(eventId:any):Observable<any> {
  //   //complete this function
  //   return this.http.get(`${this.serverName}/api/staff/event-details/`+eventId).pipe(
  //     map((data: any)=>{
  //       if(Array.isArray(data)){
  //         return data;
  //       }else{
  //         return [data];
  //       }
  //     })
  //   );
  // }
  // updateEvent(newEvent:any,eventId:any):Observable<any> {
  //  return this.http.put<Event>(`${this.serverName}/api/staff/update-setup/${eventId}`,newEvent);
  // }
  updateEvent(details: any, eventId: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.put(this.serverName + '/api/staff/update-setup/' + eventId, details, { headers: headers });
  }
  // getResources():Observable<any> {
  //  return this.http.get(`${this.serverName}/api/planner/resources`);
  // }
  getBookingDetails(eventId: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`)
    return this.http.get(this.serverName + `/api/client/booking-details/` + eventId, { headers: headers });
  }
  GetEventdetails(eventId: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`)
    return this.http.get(this.serverName + `/api/staff/event-details/` + eventId, { headers: headers });
  }
  GetAllResources(): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`)
    return this.http.get(this.serverName + `/api/planner/resources`, { headers: headers });
  }
  // addAllocateResource(data:any):Observable<any>{
  //   return this.http.post(`${this.serverName}/api/planner/allocate-resources`,data,{params: {eventId:data.event.eventID, resourceId: data.resource.resourceID}})
  // }
  allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.serverName + '/api/planner/allocate-resources?eventId=' + eventId + '&resourceId=' + resourceId, details, { headers: headers });
  }

  // addResource(data : any): Observable<any> {
  //   return this.http.post(`${this.serverName}/api/planner/resource`,data);
  // }
  addResource(details: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.serverName + '/api/planner/resource', details, { headers: headers });
  }

  // getEvents():Observable<any> {
  // return this.http.get(`${this.serverName}/api/planner/events`);
  // }
  GetAllevents(): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`)
    return this.http.get(this.serverName + `/api/planner/events`, { headers: headers });
  }
  // addEvent(details:any):Observable<any> {
  // console.log(details);

  // return this.http.post(`${this.serverName}/api/planner/event`,details);
  // }
  createEvent(details: any): Observable<any> {

    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.serverName + '/api/planner/event', details, { headers: headers });
  }
  Login(details: any): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverName + '/api/user/login', details, { headers: headers });
  }
  // registerUser(details:any):Observable<any> {
  //  //complete this function
  //  //console.log(details);
  //  return this.http.post(`${this.serverName}/api/user/register`,details);
  // }
  registerUser(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverName + '/api/user/register', details, { headers: headers });
  }
  getAllUser(): Observable<any> {
    return this.http.get(this.serverName + '/api/users');
  }

  getAllAllocationByEventId(eventId: any): Observable<any> {
    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.get(`${this.serverName}/api/client/allocation/${eventId}`, { headers: headers });
  }
  getAllEventsStaff(): Observable<any> {
    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.serverName + '/api/staff/all-event-details', { headers: headers });
  }
}

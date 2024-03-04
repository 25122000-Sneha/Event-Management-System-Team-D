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
  constructor(private http: HttpClient, private authService: AuthService) { }

  getHeaders(): HttpHeaders {
    const authToken = this.authService.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${authToken}`);
    return headers;
  }

  updateEvent(details: any, eventId: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.put(this.serverName + '/api/staff/update-setup/' + eventId, details, { headers: headers });
  }

  getBookingDetails(eventId: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + `/api/client/booking-details/` + eventId, { headers: headers });
  }

  GetEventdetails(eventId: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + `/api/staff/event-details/` + eventId, { headers: headers });
  }

  GetAllResources(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + `/api/planner/resources`, { headers: headers });
  }

  allocateResources(eventId: any, resourceId: any, details: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.post(this.serverName + '/api/planner/allocate-resources?eventId=' + eventId + '&resourceId=' + resourceId, details, { headers: headers });
  }

  addResource(details: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.post(this.serverName + '/api/planner/resource', details, { headers: headers });
  }

  GetAllevents(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + `/api/planner/events`, { headers: headers });
  }

  createEvent(details: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.post(this.serverName + '/api/planner/event', details, { headers: headers });
  }

  Login(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverName + '/api/user/login', details, { headers: headers });
  }

  registerUser(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverName + '/api/user/register', details, { headers: headers });
  }
  
  getAllUser(): Observable<any> {
    return this.http.get(this.serverName + '/api/users');
  }

  getAllEventsStaff(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + '/api/staff/all-event-details', { headers: headers });
  }

  getAllAllocationByEventId(eventId: any): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(`${this.serverName}/api/client/allocation/${eventId}`, { headers: headers });
  }

  GetAlleventsForClient(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get(this.serverName + `/api/client/events`, { headers: headers });
  }

  updateUser(userId: any, user: any) {
    let headers = this.getHeaders();
    return this.http.put(`${this.serverName}/api/user/${userId}`, user, { headers: headers });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http: HttpClient, private userServ: UserService) { }

  getGarages(): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.userServ.getToken() };
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage", { headers })
  }
  createGarages(body: any): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.userServ.getToken() };
    return this.http.post<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/add", body, { headers })
  }
}

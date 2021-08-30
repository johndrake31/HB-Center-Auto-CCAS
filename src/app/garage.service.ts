import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http: HttpClient, private userServ: UserService) { }

  headers = { 'Authorization': "Bearer " + this.userServ.getToken() };

  getGarages(): Observable<any> {
    const headers = this.headers;
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage", { headers })
  }

  getGarageById(id: any): Observable<any> {
    const headers = this.headers;
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/show/" + id, { headers })
  }

  createGarages(body: any): Observable<any> {
    const headers = this.headers;
    return this.http.post<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/add", body, { headers })
  }

  updateGarages(id, body: any): Observable<any> {
    const headers = this.headers;
    return this.http.patch<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/edit/" + id, body, { headers })
  }

  deleteGarage(id: any): Observable<any> {
    const headers = this.headers;
    return this.http.delete<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/remove/" + id, { headers })
  }
}

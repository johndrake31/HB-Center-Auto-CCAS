import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car.module';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CarAdsService {



  constructor(private http: HttpClient, private userServ: UserService) { }

  headers = { 'Authorization': "Bearer " + this.userServ.getToken() };

  getAds(): Observable<Car[]> {
    return this.http.get<Car[]>("https://powerful-badlands-63524.herokuapp.com/api/classified");
  }
  getAdsByGarage(id: any): Observable<any> {
    const headers = this.headers;
    let mydata = this.http.get<any>(`https://powerful-badlands-63524.herokuapp.com/api/ads/garage/${id}`, { headers });
    return mydata;
  }
  getAdById(id: any): Observable<any> {
    const headers = this.headers;
    let mydata = this.http.get<any>(`https://powerful-badlands-63524.herokuapp.com/api/ads/show/${id}`, { headers });
    return mydata;
  }

  deleteAdById(id: any): Observable<any> {
    const headers = this.headers;
    return this.http.delete<any>("https://powerful-badlands-63524.herokuapp.com/api/ads/remove/" + id, { headers })
  }

  createAdByGarageId(id: any, body): Observable<any> {
    const headers = this.headers;
    return this.http.post<any>("https://powerful-badlands-63524.herokuapp.com/api/ads/new/" + id, body, { headers })
  }

  updateAdById(id, body: any): Observable<any> {
    const headers = this.headers;
    return this.http.patch<any>("https://powerful-badlands-63524.herokuapp.com/api/ads/edit/" + id, body, { headers })
  }

}

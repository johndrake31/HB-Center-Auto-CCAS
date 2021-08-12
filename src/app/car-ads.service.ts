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
    console.log(id);

    return mydata;
  }


}

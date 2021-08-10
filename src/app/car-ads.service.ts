import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car.module';

@Injectable({
  providedIn: 'root'
})
export class CarAdsService {



  constructor(private http: HttpClient) { }

  getAds(): Observable<Car[]> {
    return this.http.get<Car[]>("https://powerful-badlands-63524.herokuapp.com/api/classified");
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car.module';
import { UserService } from './user.service';
import { environmentHomeUrl } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarAdsService {



  constructor(private http: HttpClient, private userServ: UserService) { }

  private getHeaders = () => {
    return { 'Authorization': "Bearer " + this.userServ.getToken() }
  };


  getAds(): Observable<Car[]> {
    return this.http.get<Car[]>(environmentHomeUrl.url + "/api/classified");
  }

  getAdsByGarage(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(environmentHomeUrl.url + `/api/ads/garage/${id}`, { headers });
  }

  getAdById(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(environmentHomeUrl.url + `/api/ads/show/${id}`, { headers });
  }

  deleteAdById(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(environmentHomeUrl.url + "/api/ads/remove/" + id, { headers })
  }

  createAdByGarageId(id: any, body): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(environmentHomeUrl.url + "/api/ads/new/" + id, body, { headers })
  }

  updateAdById(id, body: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.patch<any>(environmentHomeUrl.url + "/api/ads/edit/" + id, body, { headers })
  }

  addImage(id: number, body): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(environmentHomeUrl.url + "/api/image/" + id, body, { headers })
  }
}

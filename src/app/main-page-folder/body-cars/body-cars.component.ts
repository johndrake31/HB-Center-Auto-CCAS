import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';

import { Car } from '../../model/car.module';
// import { TempCarBddService } from '../../temp-car-bdd.service';

@Component({
  selector: 'app-body-cars',
  templateUrl: './body-cars.component.html',
  styleUrls: ['./body-cars.component.scss']
})
export class BodyCarsComponent implements OnInit {
  paginMin: number = 0;
  paginMax: number = 10;


  tempAdTable: any = [];
  ads: Car[] = []


  constructor(
    private http: HttpClient,
    // private carServe: TempCarBddService,
    private carAds: CarAdsService
  ) { }




  //methodes here
  changeSlice(n: number) {
    this.paginMin = n * 10;
    n == 0 ? this.paginMax = 10 : this.paginMax = this.paginMin + 10;
  }

  numSequence(n: number): Array<number> {
    n = Math.ceil(n)
    return Array(n);
  }


  ngOnInit(): void {
    // this.tempCars = this.carServe.carList;
    //test zone
    this.carAds.getAds().subscribe((data: any) => {
      this.ads = data.ads;
    })

    // this.route.snapshot.params.subscribe(v => console.log(v));
  }
}

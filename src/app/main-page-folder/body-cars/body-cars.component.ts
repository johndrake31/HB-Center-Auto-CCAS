import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';

import { Car } from '../../model/car.module';
// import { TempCarBddService } from '../../temp-car-bdd.service';

@Component({
  selector: 'app-body-cars',
  templateUrl: './body-cars.component.html',
  styleUrls: ['./body-cars.component.scss']
})
export class BodyCarsComponent implements OnChanges {
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.carAds = this.carTable
    console.log(changes.props);
  }

  @Input() carTable: any = []

  // pagination min/max
  paginMin: number = 0;
  paginMax: number = 10;

  //Arrays
  tempAdTable: any = [];
  carAds: Car[] = []







  //methodes here
  changeSlice(n: number) {
    this.paginMin = n * 10;
    n == 0 ? this.paginMax = 10 : this.paginMax = this.paginMin + 10;
  }

  numSequence(n: number): Array<number> {
    n = Math.ceil(n)
    return Array(n);
  }



}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Car } from '../../model/car.module';

@Component({
  selector: 'app-body-cars',
  templateUrl: './body-cars.component.html',
  styleUrls: ['./body-cars.component.scss']
})
export class BodyCarsComponent implements OnChanges {
  constructor() { }

  ngOnChanges(): void {
    this.carAds = this.carTable
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

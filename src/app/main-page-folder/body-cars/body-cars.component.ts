import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car.module';
import { TempCarBddService } from '../../temp-car-bdd.service';

@Component({
  selector: 'app-body-cars',
  templateUrl: './body-cars.component.html',
  styleUrls: ['./body-cars.component.scss']
})
export class BodyCarsComponent implements OnInit {
  paginMin: number=0;
  paginMax: number=10;

  constructor(private carServe: TempCarBddService) { }

  ngOnInit(): void {
    this.tempCars = this.carServe.carList;

  }

  tempCars: Car[]=[]

  changeSlice(n:number){
    this.paginMin = n * 10;
    n == 0? this.paginMax = 10: this.paginMax = this.paginMin +10;
  }

  numSequence(n: number): Array<number> {
    n = Math.ceil(n)
    return Array(n);
  }


}

import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.module';
import { TempCarBddService } from '../temp-car-bdd.service';

@Component({
  selector: 'app-body-cars',
  templateUrl: './body-cars.component.html',
  styleUrls: ['./body-cars.component.scss']
})
export class BodyCarsComponent implements OnInit {

  constructor(private carServe: TempCarBddService) { }

  ngOnInit(): void {
    this.tempCars = this.carServe.carList;
    console.log(this.tempCars[0].marque);

  }

  tempCars: Car[]=[]


}

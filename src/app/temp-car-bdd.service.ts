import { Injectable } from '@angular/core';
import { Car } from './model/car.module';

@Injectable({
  providedIn: 'root'
})
export class TempCarBddService {

  constructor() { }

  carList: Car[]=[];


}

import { Component, Input } from '@angular/core';
import { Car } from 'src/app/model/car.module';

@Component({
  selector: 'app-admin-car-card',
  templateUrl: './admin-car-card.component.html',
  styleUrls: ['./admin-car-card.component.scss']
})
export class AdminCarCardComponent {
  moreClicked = false;
  constructor() { }
  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "www.google.com", null, 1234);


}

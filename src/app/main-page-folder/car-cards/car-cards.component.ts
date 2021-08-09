import { Component, Input } from '@angular/core';
import { Car } from 'src/app/model/car.module';


@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent {
  moreClicked = false;
  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "www.google.com", null, 1234);
  constructor() { }


}

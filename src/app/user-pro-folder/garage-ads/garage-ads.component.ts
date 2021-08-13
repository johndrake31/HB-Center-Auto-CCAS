import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.module';

@Component({
  selector: 'app-garage-ads',
  templateUrl: './garage-ads.component.html',
  styleUrls: ['./garage-ads.component.scss']
})
export class GarageAdsComponent implements OnInit {

  moreClicked = false;
  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "www.google.com", null, 1234);
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car.module';


@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent implements OnInit {
  moreClicked = false;
  @Input() inputCars = new Car("999999", "99929929292", "21212", "121221","32000", "Gris", "2019-06-13", "2021-07-24", "21300", "Diesel", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque");

  constructor() { }

  ngOnInit(): void {
  }

}

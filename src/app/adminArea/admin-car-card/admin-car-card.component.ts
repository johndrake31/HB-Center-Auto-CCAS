import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/car.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-car-card',
  templateUrl: './admin-car-card.component.html',
  styleUrls: ['./admin-car-card.component.scss']
})
export class AdminCarCardComponent {
  moreClicked = false;
  constructor(private userServe: UserService, private router: Router) { }



  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "www.google.com", null, 1234);
  @Output() removeAdbyId = new EventEmitter<any>();

  removeListing(id: any) {
    this.removeAdbyId.emit(id);
  }

}

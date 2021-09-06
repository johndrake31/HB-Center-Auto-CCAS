import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { GarageService } from 'src/app/garage.service';
import { Car } from 'src/app/model/car.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-ads',
  templateUrl: './garage-ads.component.html',
  styleUrls: ['./garage-ads.component.scss']
})
export class GarageAdsComponent implements OnInit {

  //strings bools and inputs/outputs
  sureDelete = false;
  moreClicked = false;
  garageid: any
  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "https://car-images-ccas.s3.eu-west-3.amazonaws.com/ford-bronco-1978-yellow-16-32-56-612be73bd74d8.jpg", null, 1234);
  @Output() removeAdbyId = new EventEmitter<any>();

  // life cyc hooks
  constructor(private userServe: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

    if (!this.userServe.getIsOwner()) {
      this.router.navigate(['/home']);
    }
    this.garageid = this.route.snapshot.paramMap.get('id')
  }

  deleteAd(id: any) {
    this.removeAdbyId.emit(id);

  }
}

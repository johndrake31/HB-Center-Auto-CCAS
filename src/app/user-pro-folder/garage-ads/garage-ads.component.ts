import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { GarageService } from 'src/app/garage.service';
import { Car } from 'src/app/model/car.module';

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
  @Input() inputCars: any = new Car(6, "ford", "lots of information", "2020", 12345, "FORD", "Ranger", "gasoline", null, "www.google.com", null, 1234);
  @Output() removeAdbyId = new EventEmitter<any>();

  // life cyc hooks
  constructor(private carServe: CarAdsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.garageid = this.route.snapshot.paramMap.get('id')

  }

  deleteAd(id: any) {
    this.removeAdbyId.emit(id);

  }
}

import { Component, OnInit } from '@angular/core';

import { CarAdsService } from 'src/app/car-ads.service';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  userArr: any = "loading";
  garageArr: any = "loading";
  carAdsArr: any = "loading";

  constructor(private userServe: UserService, private garageServ: GarageService, private carAdsServ: CarAdsService) { }

  ngOnInit(): void {

    this.userServe.getAllUsers().subscribe((data: any) => {
      this.userArr = data.users.length;
    })
    this.garageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages.length;
    })
    this.carAdsServ.getAds().subscribe((data: any) => {
      this.carAdsArr = data.ads.length;
    })

  }

  logout() {
    this.userServe.loggedout();
  }

}

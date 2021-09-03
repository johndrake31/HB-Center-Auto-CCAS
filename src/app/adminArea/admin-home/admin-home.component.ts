import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  userArr: any = 0;
  garageArr: any = 0;
  carAdsArr: any = 0;

  constructor(private userServe: UserService, private garageServ: GarageService, private carAdsServ: CarAdsService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }
    this.userServe.getAllUsers().subscribe((data: any) => {
      this.userArr = data.users.length;
      console.log(this.userArr);
    })
    this.garageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages.length;
      console.log(this.garageArr);
    })
    this.carAdsServ.getAds().subscribe((data: any) => {
      this.carAdsArr = data.ads.length;
      console.log(this.carAdsArr);
    })

  }

  logout() {
    this.userServe.loggedout();
  }

}

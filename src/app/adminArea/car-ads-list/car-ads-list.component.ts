import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { Car } from 'src/app/model/car.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-car-ads-list',
  templateUrl: './car-ads-list.component.html',
  styleUrls: ['./car-ads-list.component.scss']
})
export class CarAdsListComponent implements OnInit {


  carAds: Car[] = [];



  constructor(private carServe: CarAdsService, private userServe: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }
    this.refreshCarListings();
  }

  refreshCarListings() {
    this.carServe.getAds().subscribe((data: any) => {
      this.carAds = data.ads;
    })
  }

  removeAd($event: number) {
    console.log($event);

    this.carServe.deleteAdById($event).subscribe((data: any) => {
      this.refreshCarListings();
    })
  }

  // pagination min/max
  paginMin: number = 0;
  paginMax: number = 10;


  //methodes here
  changeSlice(n: number) {
    this.paginMin = n * 10;
    n == 0 ? this.paginMax = 10 : this.paginMax = this.paginMin + 10;
  }

  numSequence(n: number): Array<number> {
    n = Math.ceil(n)
    return Array(n);
  }
}

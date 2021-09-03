import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  carRef: string = "";

  carAds: Car[] = [];
  form!: FormGroup;
  formSubmitted = false;
  isClicked = false;


  constructor(private carServe: CarAdsService, private userServe: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }
    this.refreshCarListings();

    this.form = this.fb.group({
      adref: ['', Validators.required],
    });

  }

  findCarAd() {
    this.formSubmitted = true;
    this.isClicked = true;
    if (this.form.valid) {
      //console.log(this.form.value.adref);

      this.carServe.getAdById(this.form.value.adref).subscribe(
        (data: any) => {
          if (data.car_ad_index) {
            console.log(data.car_ad_index);
            this.carAds = Array(data.car_ad_index);
          } else {
            alert("Sorry no results for that Ref. Please type in only a number");
          }
        })
      this.formReset();
    }

  }
  formReset() {
    this.form.reset();
    this.formSubmitted = false;
  }

  refreshCarListings() {
    this.isClicked = false;
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

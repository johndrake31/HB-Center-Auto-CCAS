import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GarageService } from 'src/app/garage.service';
import { CarAdsService } from 'src/app/car-ads.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  constructor(private carServe: CarAdsService, private garageServ: GarageService, private http: HttpClient, private userServ: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let garageid = this.route.snapshot.paramMap.get('id')
    console.log(garageid);

    this.garageServ.getGarageById(garageid).subscribe((data: any) => {
      console.log(data);
      this.garage = data.garage_index;

      this.carServe.getAdsByGarage(garageid).subscribe((data2: any) => {
        console.log(data2);
        this.carAds = data2.ads
      })
    })


  }
  garage: any
  carAds: any
}

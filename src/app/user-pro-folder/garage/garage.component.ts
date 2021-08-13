import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GarageService } from 'src/app/garage.service';
import { CarAdsService } from 'src/app/car-ads.service';
import { Car } from 'src/app/model/car.module';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  constructor(private carServe: CarAdsService, private garageServ: GarageService, private http: HttpClient, private userServ: UserService, private route: ActivatedRoute) { }
  moreClicked = false;
  ngOnInit(): void {
    let garageid = this.route.snapshot.paramMap.get('id')

    // 
    this.garageServ.getGarageById(garageid).subscribe((data: any) => {
      this.garage = data.garage_index;
    })
    this.carServe.getAdsByGarage(garageid).subscribe((data2: any) => {
      this.carAds = data2.ads
    })

  }



  garage: any = {
    id: 88888888,
    name: "EXAMPLE NAME",
    address: "7 rue du la province",
    telephone: "890-997-9898",
    city: "lyon",
    postelcode: 69002,
  }

  carAds: any = [{
    id: 99999999,
    title: "EXAMPLE TITLE DATA ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque animi tenetur. Tempora, saepe? Optio et fuga ut eaque aperiam nihil ea doloribus? Eum, nemo est? Dolore ducimus perspiciatis tempore.",
    year: "2021-08-04T00:00:00+00:00",
    kilometers: 2000,
    brand: "EXAMPLE",
    model: "Ranger",
    fuel: "ELECTRIC",
    image: ".jpg",
    price: 23000
  }]

  paginMin: number = 0;
  paginMax: number = 10;

  changeSlice(n: number) {
    this.paginMin = n * 10;
    n == 0 ? this.paginMax = 10 : this.paginMax = this.paginMin + 10;
  }

  numSequence(n: number): Array<number> {
    n = Math.ceil(n)
    return Array(n);
  }
}

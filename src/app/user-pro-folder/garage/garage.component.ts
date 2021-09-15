
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { CarAdsService } from 'src/app/car-ads.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  moreClicked = false;
  modeEdit = false;
  sureDelete = false;
  garageid: any
  constructor(private userServe: UserService, private carServe: CarAdsService, private garageServ: GarageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServe.getIsOwner()) {
      this.router.navigate(['/home']);
    }

    this.garageid = this.route.snapshot.paramMap.get('id')

    // 
    this.garageServ.getGarageById(this.garageid).subscribe((data: any) => {
      this.garage = data.garage_index;

      this.carServe.getAdsByGarage(this.garageid).subscribe((data2: any) => {
        this.carAds = data2.ads
      })
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
    title: "PLEASE TURN OFF YOUR ADD BLOCKER",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque animi tenetur. Tempora, saepe? Optio et fuga ut eaque aperiam nihil ea doloribus? Eum, nemo est? Dolore ducimus perspiciatis tempore.",
    year: "2021-08-04T00:00:00+00:00",
    kilometers: 2000,
    brand: "EXAMPLE",
    model: "Ranger",
    fuel: "ELECTRIC",
    image: "carTest.JPEG",
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

  removeAd(event: number) {
    this.carServe.deleteAdById(event).subscribe((data: any) => {
      this.carServe.getAdsByGarage(this.garageid).subscribe((data2: any) => {
        this.carAds = data2.ads
      })
    })
  }

  updateThisGarage($event: number) {
    console.log($event);

    this.garageServ.getGarageById(this.garageid).subscribe((data: any) => {
      this.garage = data.garage_index;
      this.modeEdit = false;
    })
  }
  deleteGarage(id: number) {
    this.garageServ.deleteGarage(id).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/mes-garages']);
    })
  }
}

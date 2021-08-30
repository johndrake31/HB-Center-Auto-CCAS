import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/garage.service';

@Component({
  selector: 'app-garage-list-admin',
  templateUrl: './garage-list-admin.component.html',
  styleUrls: ['./garage-list-admin.component.scss']
})
export class GarageListAdminComponent implements OnInit {
  garageArr: any;

  constructor(private garageServ: GarageService) { }

  ngOnInit(): void {
    this.getGarages();
  }

  getGarages() {
    this.garageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages;
    })
  }

  removeGarage(garage: any) {
    this.garageServ.deleteGarage(garage.id).subscribe(data => {
      console.log(data);
      this.getGarages();
    })


  }

}

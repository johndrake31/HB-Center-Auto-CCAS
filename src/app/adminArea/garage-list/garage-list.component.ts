import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/garage.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  garageArr: any;

  constructor(private garageServ: GarageService) { }

  ngOnInit(): void {

  }

  getGarages() {
    this.garageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages;
    })
  }

}

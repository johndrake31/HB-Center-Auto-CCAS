
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';


@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {

  constructor(private router: Router, private GarageServ: GarageService) { }

  ngOnInit(): void {
    this.GarageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages;
    })
  }

  headersAuthTok: any = "";
  garageArr: any = [];
  garageInfo: any = [];

  reroute(garageid: number) {
    this.router.navigate(['/garage/' + garageid]);
  }

}

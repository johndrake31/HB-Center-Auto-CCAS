import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private userServ: UserService, private GarageServ: GarageService) { }

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

  // routeToGarage(garageId: number) {
  //   const headers = { 'Authorization': "Bearer " + this.userServ.getToken() };
  //   this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/show/" + garageId, { headers }).subscribe((data: any) => {
  //     // this.garageArr = data.garage;
  //     console.log(data.garage_index);
  //   })
  // }
}

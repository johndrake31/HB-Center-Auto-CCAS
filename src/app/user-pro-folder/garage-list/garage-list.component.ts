import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  constructor(private http: HttpClient, private userServ: UserService, private GarageServ: GarageService) { }

  ngOnInit(): void {
    this.GarageServ.getGarages().subscribe((data: any) => {
      this.garageArr = data.garages;
      console.log(data.garages);
    })
  }

  headersAuthTok: any = "";
  garageArr: any = [];
  garageInfo: any = [];

  routeToGarage(garageId: number) {
    const headers = { 'Authorization': "Bearer " + this.userServ.getToken() };
    this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage/show/" + garageId, { headers }).subscribe((data: any) => {
      // this.garageArr = data.garage;
      console.log(data.garage_index);
    })
  }
}

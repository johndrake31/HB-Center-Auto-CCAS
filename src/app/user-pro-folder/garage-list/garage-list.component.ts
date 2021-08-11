import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  constructor(private http: HttpClient, private userServ: UserService) { }

  ngOnInit(): void {
    const headers = { 'Authorization': "Bearer " + this.userServ.getToken() }
    this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/garage", { headers }).subscribe((data: any) => {
      this.garageArr = data.garages;
    })
  }

  garageArr: any = [];
}


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

  constructor(private userServe: UserService, private router: Router, private GarageServ: GarageService) { }

  ngOnInit(): void {
    if (!this.userServe.getIsOwner()) {
      this.router.navigate(['/home']);
    }

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

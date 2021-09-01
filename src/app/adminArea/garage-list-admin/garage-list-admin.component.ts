import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-list-admin',
  templateUrl: './garage-list-admin.component.html',
  styleUrls: ['./garage-list-admin.component.scss']
})
export class GarageListAdminComponent implements OnInit {
  garageArr: any;
  deleteClicked = false;

  constructor(private garageServ: GarageService, private userServe: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }
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
      this.deleteClicked = !this.deleteClicked;
      this.getGarages();
    })
  }

  editGarage(garage: any) {
    this.router.navigate(['/update-pro-garage/' + garage.id]);
  }
}

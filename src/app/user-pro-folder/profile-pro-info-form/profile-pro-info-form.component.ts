import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-pro-info-form',
  templateUrl: './profile-pro-info-form.component.html',
  styleUrls: ['./profile-pro-info-form.component.scss']
})
export class ProfileProInfoFormComponent implements OnInit {
  constructor(private userServ: UserService) { }
  ngOnInit(): void {
    this.userServ.getUserInfos().subscribe((data: any) => {
      this.userData = data.user_index;
      console.log(this.userData);

    })
  }

  userData: any = {
    firstname: "firstname",
    lastname: "lastname",
    siret: "siret",
    email: "email",
    telephone: "tele",
    username: "username"

  }

}

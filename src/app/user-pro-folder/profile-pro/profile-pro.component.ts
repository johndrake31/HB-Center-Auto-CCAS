import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-pro',
  templateUrl: './profile-pro.component.html',
  styleUrls: ['./profile-pro.component.scss']
})
export class ProfileProComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
  }
  logout() {
    this.userServ.loggedout();
  }

}

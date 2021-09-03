import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-pro',
  templateUrl: './profile-pro.component.html',
  styleUrls: ['./profile-pro.component.scss']
})
export class ProfileProComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServ.getIsOwner()) {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.userServ.loggedout();
  }

}

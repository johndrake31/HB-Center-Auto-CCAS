import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private userServe: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.userServe.loggedout();
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) {
    this.isLogged = this.userServ.getIsLogged();
    this.username = this.userServ.getUsername();

  }
  ngOnInit(): void {
    if (sessionStorage.getItem("isAdmin") === "true") {
      console.log(sessionStorage.getItem("isAdmin"));

      this.menu = "Admin Menu"
      this.isAdmin = true;
    }
  }

  menu: string = "User-Pro Menu"
  username: string;
  isLogged: boolean;
  isAdmin: boolean;

  goToMenu() {
    if (this.isAdmin) {
      this.router.navigate(['/admin-menu']);
    } else {
      this.router.navigate(['/userpro']);
    }
  }
  logout() {
    this.isLogged = false;
    this.userServ.loggedout();
  }

}

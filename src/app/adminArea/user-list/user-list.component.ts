import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  clickDelete = false;
  userTbl: any;

  constructor(private userServe: UserService) { }

  ngOnInit(): void {
    if (this.userServe.getIsAdmin) {
      this.getUserList();

    }
  }

  getUserList() {
    this.userServe.getUsersForAdmin().subscribe((data: any) => {
      console.log(data);

      //populate list and remove the admin from the list
      this.userTbl = data.users.filter((user: any) => user.roles.indexOf("ROLE_ADMIN") == -1);
    })
  }

  deleteUser(id: number) {
    if (!this.clickDelete) {
      this.clickDelete = true;
      alert("Are you sure you want to delete this user? Action cannot be undone!! If so click delete again.")
    } else {
      this.userServe.deleteUserForAdmin(id).subscribe((data: any) => {
        console.log(data);
        this.clickDelete = false;
        this.getUserList();
      })
    }
  }

}

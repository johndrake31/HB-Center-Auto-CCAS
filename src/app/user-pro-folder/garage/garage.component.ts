import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  constructor(private http: HttpClient, private userServ: UserService) { }

  ngOnInit(): void {
    const headers = { 'Authorization': `${this.userServ.getToken()}` }
    this.http.get("https://powerful-badlands-63524.herokuapp.com/api/garage", { headers }).subscribe((data: any) => {
      console.log(data);

    })
  }

}

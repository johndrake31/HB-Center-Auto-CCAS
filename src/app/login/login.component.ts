import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private http: HttpClient, private router: Router, private userServ: UserService) { }

  form!: FormGroup;
  formSubmitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    this.formSubmitted = true;
    if (this.form.valid) {
      // console.log(this.form.value);

      this.http.post("https://powerful-badlands-63524.herokuapp.com/api/login_check", this.form.value).subscribe(
        (data: any) => {

          const token: any = jwt_decode(data.token);
          this.userServ.setExp(token.exp);
          sessionStorage.setItem("isLogged", "true");
          this.userServ.setUsername(token.username);
          this.userServ.setToken(data.token);
          this.userServ.setRefreshToken(data.refresh_token);

          // console.log(token.roles);



          this.userServ.setRoles(token.roles);
          this.userServ.setIsLogged();
          this.form.reset();
          this.formSubmitted = false;


          if (token.roles.indexOf('ROLE_ADMIN') >= 0) {
            this.userServ.setIsAdmin();
            // console.log(this.userServ.getIsAdmin());
            this.router.navigate(['/admin-menu']);

          } else if (token.roles.indexOf('ROLE_OWNER') >= 0) {
            this.userServ.setIsOwner();
            this.router.navigate(['/home']);
          }
        }
      );
    }
  }
}

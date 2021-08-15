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
          this.userServ.setRoles(token.roles);
          this.userServ.setIsLogged();
          this.form.reset();
          this.formSubmitted = false;

          // setTimeout(() => {
          //   this.userServ.getNewToken().subscribe((data: any) => {
          //     console.log(data);

          //   })
          // }, 6200000); //1.5 hours

          this.router.navigate(['/home']);

        }
      );
    }
  }
}

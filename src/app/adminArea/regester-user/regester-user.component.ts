import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-regester-user',
  templateUrl: './regester-user.component.html',
  styleUrls: ['./regester-user.component.scss']
})
export class RegesterUserComponent implements OnInit {

  garageid: any
  form!: FormGroup;
  formSubmitted = false;
  selectedFile: File = null;
  constructor(private userServe: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (this.userServe.getIsAdmin) {
      this.form = this.fb.group({
        username: ['', Validators.required],
        siret: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        password: ['', Validators.required],
        roles: [["USER_OWNER"]],
      });
    } else {
      this.router.navigate(['/home']);
    }
  }

  /*************
  * Methodes
  **********/


  createProUser() {


    if (this.form.valid) {
      console.log(this.form.value);

      this.userServe.addUserPro(this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/admin-menu']);
        }
      );
    }
  }


}

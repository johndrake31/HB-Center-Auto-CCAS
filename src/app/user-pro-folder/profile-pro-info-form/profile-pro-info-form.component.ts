import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-pro-info-form',
  templateUrl: './profile-pro-info-form.component.html',
  styleUrls: ['./profile-pro-info-form.component.scss']
})
export class ProfileProInfoFormComponent implements OnInit {
  /*************
   * objects and props
   **********/
  userData: any = {
    firstname: "firstname",
    lastname: "lastname",
    siret: "siret",
    email: "email",
    telephone: "tele",
    username: "username"
  }
  form!: FormGroup;
  formSubmitted = false;

  /*************
   * Life cyc hooks
   **********/
  constructor(private userServ: UserService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.userServ.getIsOwner()) {
      this.router.navigate(['/home']);
    } else {

      this.userServ.getUserInfos().subscribe((data: any) => {
        this.userData = data.user_index;
        // console.log(this.userData);
        // update infos

        this.form = this.fb.group({
          firstname: [this.userData.firstname!, Validators.required],
          lastname: [this.userData.lastname!, Validators.required],
          email: [this.userData.email!, Validators.required],
          telephone: [this.userData.telephone!, Validators.required],
        });

      })
    }
  }

  /*************
   * Methodes
   **********/
  updateProfile() {
    this.formSubmitted = true;
    // console.log(this.form.valid); //false

    if (this.form.valid) {
      // console.log(this.form.value);

      this.userServ.updateUserInfos(this.userData.id, this.form.value).subscribe(
        data => {
          // console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/userpro']);
        }
      );
    }
  }

}

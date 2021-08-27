import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-user-pro',
  templateUrl: './update-user-pro.component.html',
  styleUrls: ['./update-user-pro.component.scss']
})
export class UpdateUserProComponent implements OnInit {

  /*************
   * objects and props
   **********/
  userId: any;

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
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');


    this.userServ.getUserInfosAdmin(this.userId).subscribe((data: any) => {
      this.userData = data.user_index;

      this.form = this.fb.group({
        firstname: [this.userData.firstname!, Validators.required],
        lastname: [this.userData.lastname!, Validators.required],
        email: [this.userData.email!, Validators.required],
        telephone: [this.userData.telephone!, Validators.required],
      });

    })
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
          this.router.navigate(['/user-list']);
        }
      );
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-garage-ajouter',
  templateUrl: './garage-ajouter.component.html',
  styleUrls: ['./garage-ajouter.component.scss']
})
export class GarageAjouterComponent implements OnInit {

  constructor(private userServe: UserService, private fb: FormBuilder, private router: Router, private garageServ: GarageService) { }


  form!: FormGroup;
  formSubmitted = false;

  ngOnInit(): void {
    if (!this.userServe.getIsOwner()) {
      this.router.navigate(['/home']);
    }

    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      city: ['', Validators.required],
      postelcode: ['', Validators.required],

    });
  }

  addGarage() {
    this.formSubmitted = true;
    if (this.form.valid) {
      console.log(this.form.value);

      this.garageServ.createGarages(this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/mes-garages']);
        }
      );
    }
  }

}

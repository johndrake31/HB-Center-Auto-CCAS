import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { GarageService } from 'src/app/garage.service';

@Component({
  selector: 'app-garage-add-car-form',
  templateUrl: './garage-add-car-form.component.html',
  styleUrls: ['./garage-add-car-form.component.scss']
})
export class GarageAddCarFormComponent implements OnInit {
  garageid: any
  form!: FormGroup;
  formSubmitted = false;
  constructor(private carServe: CarAdsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.garageid = this.route.snapshot.paramMap.get('id');

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      year: ['', Validators.required],
      kilometers: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      fuel: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  /*************
  * Methodes
  **********/
  createCarAd() {
    this.formSubmitted = true;
    // console.log(this.form.valid); //false

    if (this.form.valid) {
      console.log(this.form.value);

      this.carServe.createAdByGarageId(this.garageid, this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/garage/' + this.garageid]);
        }
      );
    }
  }

}

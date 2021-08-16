import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';

@Component({
  selector: 'app-garage-ads-update-form',
  templateUrl: './garage-ads-update-form.component.html',
  styleUrls: ['./garage-ads-update-form.component.scss']
})
export class GarageAdsUpdateFormComponent implements OnInit {

  carAdId: any;
  garageid: any;
  form!: FormGroup;
  formSubmitted = false;
  constructor(private carServe: CarAdsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('id').split('&');
    this.garageid = query[1];
    this.carAdId = query[0];

    console.log(query);

    // this.garageid = this.route.snapshot.paramMap.get('id');

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
  editCarAd() {
    this.formSubmitted = true;
    // console.log(this.form.valid); //false

    if (this.form.valid) {
      console.log(this.form.value);

      this.carServe.updateAdById(this.garageid, this.form.value).subscribe(
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

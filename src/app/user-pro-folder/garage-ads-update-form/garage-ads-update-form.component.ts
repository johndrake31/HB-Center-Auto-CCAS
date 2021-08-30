import { HttpClient } from '@angular/common/http';
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
  fuel: any
  carAdId: any;
  garageid: any;
  form!: FormGroup;
  formSubmitted = false;
  selectedFile: File = null;
  constructor(private carServe: CarAdsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('id').split('&');
    this.garageid = query[1];
    this.carAdId = query[0];


    this.carServe.getAdById(this.carAdId).subscribe((data: any) => {
      // console.log(data.car_ad_index);
      let carAd = data.car_ad_index;
      let year = carAd.year.slice(0, 10);
      this.fuel = carAd.fuel;

      this.form = this.fb.group({
        title: [carAd.title, Validators.required],
        description: [carAd.description, Validators.required],
        year: [year, Validators.required],
        kilometers: [carAd.kilometers, Validators.required],
        brand: [carAd.brand, Validators.required],
        model: [carAd.model, Validators.required],
        fuel: [carAd.fuel, Validators.required],
        price: [carAd.price, Validators.required],
        image: [carAd.image, Validators.required],
      });


    })


  }

  /*************
  * Methodes
  **********/

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  //reset after service completes
  formReset() {
    this.form.reset();
    this.formSubmitted = false;
  }

  //reroute after service completes
  routerGarageNav() {
    this.router.navigate(['/garage/' + this.garageid]);
  }

  editCarAd() {
    this.formSubmitted = true;
    const fd = new FormData();

    if (this.selectedFile) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
      // console.log(this.form.valid); //false
    }

    if (this.form.valid) {
      // console.log(this.form.value);

      this.carServe.updateAdById(this.carAdId, this.form.value).subscribe(
        data => {
          //console.log(data);

          if (this.selectedFile) {
            this.carServe.addImage(data.Car_Ad_Edit.id, fd).subscribe((data2) => {
              console.log(data2);
              this.formReset();
              this.routerGarageNav();
            });
          } else {
            this.formReset();
            this.routerGarageNav();
          }
        }
      );
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-garage-add-car-form',
  templateUrl: './garage-add-car-form.component.html',
  styleUrls: ['./garage-add-car-form.component.scss']
})
export class GarageAddCarFormComponent implements OnInit {
  garageid: any
  form!: FormGroup;
  formSubmitted = false;
  selectedFile: File = null;

  constructor(private userServe: UserService, private carServe: CarAdsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }



  ngOnInit(): void {

    if (!this.userServe.getIsOwner()) {
      this.router.navigate(['/home']);
    }

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
      image: ['', Validators.required,],
    });
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

  createCarAd() {
    this.formSubmitted = true;
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    if (this.form.valid) {

      this.carServe.createAdByGarageId(this.garageid, this.form.value).subscribe(
        data2 => {
          //console.log(data2);

          // // TEST ADD IMAGE AREA
          this.carServe.addImage(data2.Car_Ad_New.id, fd).subscribe((data) => {
            console.log(data);
            this.formReset()
            this.routerGarageNav();
          });

          // // END TEST AREA

        }
      );
    }
  }

}

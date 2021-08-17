import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdsService } from 'src/app/car-ads.service';


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
      file: ['', Validators.required,],
    });
  }

  /*************
  * Methodes
  **********/
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    // console.log(this.selectedFile);

  }



  createCarAd() {
    this.formSubmitted = true;
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    // console.log(this.form.value);

    // console.log(this.form.valid);
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

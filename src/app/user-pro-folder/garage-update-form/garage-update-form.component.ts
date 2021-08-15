import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';

@Component({
  selector: 'app-garage-update-form',
  templateUrl: './garage-update-form.component.html',
  styleUrls: ['./garage-update-form.component.scss']
})
export class GarageUpdateFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private http: HttpClient, private router: Router, private garageServ: GarageService) { }

  form!: FormGroup;
  formSubmitted = false;
  @Input() garageInfo: any;
  @Output() editGarageMode = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.garageInfo);

    this.form = this.fb.group({
      name: [this.garageInfo.name, Validators.required],
      address: [this.garageInfo.address, Validators.required],
      telephone: [this.garageInfo.telephone, Validators.required],
      city: [this.garageInfo.city, Validators.required],
      postelcode: [this.garageInfo.postelcode, Validators.required],

    });
  }

  editGarage() {
    this.formSubmitted = true;
    if (this.form.valid) {
      console.log(this.form.value);

      this.garageServ.updateGarages(this.garageInfo.id, this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.editGarageMode.emit(this.garageInfo.id);
        }
      );
    }
  }
}

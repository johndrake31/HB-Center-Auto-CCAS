import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/garage.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-pro-garage',
  templateUrl: './update-pro-garage.component.html',
  styleUrls: ['./update-pro-garage.component.scss']
})


export class UpdateProGarageComponent implements OnInit {

  constructor(private userServe: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private garageServ: GarageService) { }

  form!: FormGroup;
  formSubmitted = false;
  garageInfo: any;
  garageId: string;

  ngOnInit(): void {

    if (!this.userServe.getIsAdmin()) {
      this.router.navigate(['/home']);
    }

    this.garageId = this.route.snapshot.paramMap.get('id');

    this.garageServ.getGarageById(this.garageId).subscribe((data: any) => {
      this.garageInfo = data.garage_index;

      console.log(this.garageInfo);

      this.form = this.fb.group({
        name: [this.garageInfo.name, Validators.required],
        address: [this.garageInfo.address, Validators.required],
        telephone: [this.garageInfo.telephone, Validators.required],
        city: [this.garageInfo.city, Validators.required],
        postelcode: [this.garageInfo.postelcode, Validators.required],
      });
    })
  }

  editGarage() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.garageServ.updateGarages(this.garageId, this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          //reroute here
          this.router.navigate(['/garage-list']);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CarAdsService } from 'src/app/car-ads.service';
import { Car } from '../../model/car.module';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor(private carServe: CarAdsService) {
  }

  ngOnInit(): void {
    this.carServe.getAds().subscribe((data: any) => {
      this.getMarque(data);
    }

    );

  }


  ///The horror Starts Here
  carListingArr: any = [];
  currentYear = new Date().getFullYear();

  //tables or arrays
  marquesArr: any = ["BRAND"];
  modeleArr: any = ["MODEL"];
  carb = ["ELECTRIC", "GASOLINE", "DIESEL", "HYBRID"]


  //strings
  marqueString = "BRAND";
  modeleString = "MODEL";
  carbString = "FUEL";
  slideNombre = "YEAR";
  kilometrage = "KILOMETERS";
  prix = "PRICE";

  getMarque(carObjsArr: {}) {
    let carArr = Object.entries(carObjsArr);
    let carObjArr: any = carArr[0][1];

    //populates carListing array with current carAd objects
    this.carListingArr = carObjArr;

    let brandArr = carObjArr.map((carAd: Car) => carAd.brand)
    const noDuplicates = [...new Set(brandArr)];

    // Brand/Marque Array is populated with results after duplicates are removed
    return this.marquesArr = noDuplicates;
  }


  changeStringMQ(val: string): void {
    this.marqueString = val;
    this.searchObj.marqueStringa = val;
    this.modeleString = "MODEL";
    // filter the objects and create array that has only the same brand name
    const tempArr = this.carListingArr.filter((e: any) => e.brand.toLocaleUpperCase() == this.marqueString.toLocaleUpperCase());
    // returns an array of only the model names
    const tempArr2 = tempArr.map((e: any) => e.model);

    //remove duplicates by creating a unique Set.
    const tempArr3 = [...new Set(tempArr2)];

    //Populates Car Model array with results based on brand selected.
    this.modeleArr = tempArr3;


    if (this.marqueString == "BRAND") {
      this.modeleString = "MODEL";
    }

  }


  changeStringMD(val: string): void {
    this.modeleString = val;
    this.searchObj.modeleString = val;
  }

  changeStringCarb(val: string) {
    this.carbString = val;
    this.searchObj.carbString = val;
    this.searchObj.carbString = val;
  }

  getYear($event: any): void {
    this.searchObj.slideNombre = $event.target.value;
  }

  getKilometers($event: any): void {
    this.searchObj.kilometrage = $event.target.value;
  }

  getPrice($event: any): void {
    this.searchObj.prix = $event.target.value;
  }



  myBigValider(): void {
    console.log(this.searchObj);

    //button reset
    this.marqueString = "BRAND";
    this.modeleString = "MODEL";
    this.carbString = "FUEL TYPE";
    this.slideNombre = "YEAR";
    this.kilometrage = "KILOMETERS";
    this.prix = "PRICE";

  }

  //filter view
  searchObj = {
    marqueStringa: null,
    modeleString: null,
    carbString: null,
    slideNombre: "1920",
    kilometrage: "300000",
    prix: "300000"
  }
}


//study this CODE snippet

// closeOtherMenues(state: string): void {
//   for(const a in this.boolTbl) {
//   if (a !== state) { this.boolTbl[a] = false; }
// }
// this.boolTbl[state] = !this.boolTbl[state];
//   }




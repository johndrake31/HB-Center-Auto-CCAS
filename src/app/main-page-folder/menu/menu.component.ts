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

  // Objects

  searchObj = {
    //filter ads
    brand: null,
    model: null,
    fuelType: null,
    year: null,
    kilometers: null,
    price: null,
  }

  // Methods
  resetSearchObj() {
    for (const key in this.searchObj) {
      this.searchObj[key] = null;
    }
  }

  resetCarAds() {
    this.carServe.getAds().subscribe((data: any) => {
      this.getMarque(data);
      this.resetSearchObj();
      this.resetStrings();
    }
    );
  }

  getMarque(carObjsArr: {}) {
    // turn a json object into an array
    let carArr = Object.entries(carObjsArr);
    let carObjArr: any = carArr[0][1];

    //populates carListing array and searchObject with current carAd;
    this.carListingArr = carObjArr;

    // return a new array with just the brands
    let brandArr = carObjArr.map((carAd: Car) => carAd.brand)
    // removes the duplicates
    const noDuplicates = [...new Set(brandArr)];

    // Brand/Marque Array is populated with results after duplicates are removed
    return this.marquesArr = noDuplicates;
  }


  changeStringMQ(val: string): void {
    this.marqueString = val;
    this.searchObj.brand = val;
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
    this.searchObj.model = val;
  }

  changeStringCarb(val: string) {
    this.carbString = val;
    this.searchObj.fuelType = val;

  }

  getYear($event: any): void {
    this.searchObj.year = $event.target.value;
  }

  getKilometers($event: any): void {
    this.searchObj.kilometers = $event.target.value;
  }

  getPrice($event: any): void {
    this.searchObj.price = $event.target.value;
  }


  myBigValider(): void {
    let filterTable = this.carListingArr;

    // if brand is set do the first filter/map
    if (this.searchObj.brand) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.brand == this.searchObj.brand
      );
    }
    // if model is set do the 2nd filter
    if (this.searchObj.model) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.model == this.searchObj.model
      );
    }
    // if fuelType is set do the 3rd filter
    if (this.searchObj.fuelType) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.fuel == this.searchObj.fuelType
      );
    }
    // if year is set do the 4th filter
    if (this.searchObj.year) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.year >= this.searchObj.year
      );
    }
    // if kilometers is set do the 5th filter
    if (this.searchObj.kilometers) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.kilometers <= this.searchObj.kilometers
      );
    }
    // if price is set do the 5th filter
    if (this.searchObj.price) {
      filterTable = filterTable.filter((carAd: Car) =>
        carAd.price <= this.searchObj.price
      );
    }


    console.log(filterTable);

    //button reset and object reset
    this.resetSearchObj();
    this.resetStrings()
  }

  resetStrings() {
    this.marqueString = "BRAND";
    this.modeleString = "MODEL";
    this.carbString = "FUEL";
    this.slideNombre = "YEAR";
    this.kilometrage = "KILOMETERS";
    this.prix = "PRICE";
  }


}


//study this CODE snippet

// closeOtherMenues(state: string): void {
//   for(const a in this.boolTbl) {
//   if (a !== state) { this.boolTbl[a] = false; }
// }
// this.boolTbl[state] = !this.boolTbl[state];
//   }




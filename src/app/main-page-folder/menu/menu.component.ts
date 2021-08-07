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
  marquesArr: any = ["volkswagen"];
  modeleArr: any = ["mustange", "peter"];
  carb = ["Carburant", "Électrique", "Essence", "Diesel"]


  //bools

  menuDisplayed = false;

  boolTbl: { [key: string]: boolean } = {
    marqueBool: false,
    modeleBool: false,
    carbBool: false,
    slideBool: false,
    kmBool: false,
    prixBool: false,
  }
  //strings
  marqueString = "BRAND";
  modeleString = "MODEL";
  carbString = "FUEL";
  slideNombre = "YEAR";
  kilometrage = "KILOMETERS";
  prix = "PRICE";

  //filter view
  searchObject = {
    marqueStringa: "",
    modeleString: "",
    carbString: "",
    slideNombre: this.slideNombre,
    kilometrage: this.kilometrage,
    prix: this.prix,
  }

  //Working
  getMarque(carObjsArr: {}) {
    let carArr = Object.entries(carObjsArr);
    let carObjArr: any = carArr[0][1];

    //populates carListing array with current carAd objects
    this.carListingArr = carObjArr;
    console.log(this.carListingArr);

    let brandArr = carObjArr.map((carAd: Car) => carAd.brand)
    const noDuplicates = [...new Set(brandArr)];
    return this.marquesArr = noDuplicates;
  }


  changeStringMQ(val: string): void {
    this.marqueString = val;
    this.modeleString = "MODEL";
    // filter the objects and create array that has only the same brand name
    const tempArr = this.carListingArr.filter((e: any) => e.brand.toLocaleUpperCase() == this.marqueString.toLocaleUpperCase());
    // returns an array of only the model names
    const tempArr2 = tempArr.map((e: any) => e.model);
    console.log(tempArr2);

    //erases duplicates
    const tempArr3 = [...new Set(tempArr2)];
    console.log(tempArr3);

    this.modeleArr = tempArr3;
    if (this.marqueString == "BRAND") {
      this.modeleString = "MODEL";
      this.boolTbl.modeleBool = false;
    }
    if (this.marqueString !== "BRAND")
      this.boolTbl.marqueBool = !this.boolTbl.marqueBool;
  }

  //working
  changeStringMD(val: string): void {
    this.modeleString = val;
    this.boolTbl.modeleBool = !this.boolTbl.modeleBool;
  }
  changeStringCarb(val: string) {
    this.carbString = val;
    this.searchObject.carbString = val;
    this.boolTbl.carbBool = !this.boolTbl.carbBool;
  }
  getPrice($event: any): void {
    console.log($event.target);

    this.searchObject.prix = $event.target.value;
  }
  //understand this
  closeOtherMenues(state: string): void {
    for (const a in this.boolTbl) {
      if (a !== state) { this.boolTbl[a] = false; }
    }
    this.boolTbl[state] = !this.boolTbl[state];
  }

  myBigValider(): void {
    //the big reset
    this.marqueString = "Marque";
    this.modeleString = "Modèle";
    this.carbString = "Carburant";
    this.slideNombre = "l'Annee";
    this.kilometrage = "kilometrage";
    this.prix = "prix";
    for (const a in this.boolTbl) {
      this.boolTbl[a] = false;
    }
  }
}







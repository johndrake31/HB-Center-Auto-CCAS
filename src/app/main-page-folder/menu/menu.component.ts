import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car.module';
import { TempCarBddService } from '../../temp-car-bdd.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private carServe: TempCarBddService) { }

  ngOnInit(): void {
    this.carServe.getMarque().subscribe( marques => this.marques = marques);
    this.carListingTbl = this.carServe.carList;
  }


  ///The horror Starts Here


  carListingTbl: Car[] = [];
  currentYear = new Date().getFullYear();

  //tbls
  marques: string[]=[ "volkswagen" ];
  modele =["Modèle"] ;
  carb: string[]= ["Carburant", "Électrique", "Essence", "Diesel" ]


  //bools

  menuDisplayed = false;

  boolTbl: {[key: string]: boolean} = {
    marqueBool : false,
    modeleBool : false,
    carbBool: false,
    slideBool : false,
    kmBool : false,
    prixBool : false,
  }
  //strings
  marqueString = "Marque";
  modeleString = "Modèle";
  carbString = "Carburant";
  slideNombre = "l'Annee";
  kilometrage = "kilometrage";
  prix = "prix";

//filter view
  searchObject = {
    marqueStringa: "",
    modeleString: "",
    carbString: "",
    slideNombre: this.slideNombre,
    kilometrage: this.kilometrage,
    prix: this.prix,
  }


  changeStringMQ(val: string): void{
    this.marqueString = val;

    this.searchObject.marqueStringa=val;
    this.modeleString = "Modèle";
    const tempArr = this.carListingTbl.filter( e => e.marque.toLocaleLowerCase() == this.marqueString.toLocaleLowerCase())
    const tempArr2 = tempArr.map(e => e.model);
    const tempArr3 = [...new Set(tempArr2)];
    this.modele = tempArr3;
    if(this.marqueString == "Marque"){
      this.modeleString = "Modèle";
      this.boolTbl.modeleBool = false ;
    }
    if(this.marqueString !== "Marque")
    this.boolTbl.marqueBool = !this.boolTbl.marqueBool;
  }

  changeStringMD(val: string): void{
    this.modeleString = val;
    this.searchObject.modeleString = val;
    this.boolTbl.modeleBool = !this.boolTbl.modeleBool;
  }
  changeStringCarb(val: string){
    this.carbString = val;
    this.searchObject.carbString = val;
    this.boolTbl.carbBool = !this.boolTbl.carbBool;
  }
  getPrice($event: any): void{
    console.log($event.target);

     this.searchObject.prix = $event.target.value;
  }
//understand this
  closeOtherMenues(state:string):void{
    for (const a in this.boolTbl){
      if (a !== state) { this.boolTbl[a] = false; }
    }
    this.boolTbl[state] = !this.boolTbl[state];
  }

  myBigValider():void{
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







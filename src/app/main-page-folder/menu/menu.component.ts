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


  carListingTbl: Car[] = [];
  currentYear = new Date().getFullYear();

  //tbls
  marques: string[]=["Marque", "ford", "audi", "tesla", "porsche", "mercedes", "chevrolet", "volkswagen" ];
  modele =["Modèle", "mod 1", "mod2","mod3"] ;
  carb: string[]= ["Carburant", "diesel", "essence", "électrique"]

  //bootStrap Bool
  isMenuCollapsed = true;
  //bools
  menuDisplayed = false;
  marqueBool =  false;
  modeleBool = false;
  carbBool= false;
  slideBool = false;
  kmBool = false;
  prixBool = false;

  //strings
  marqueString = "Marque";
  modeleString = "Modèle";
  carbString = "Carburant";
  slideNombre = "l'Annee";
  kilometrage = "kilometrage";
  prix = "prix";


  searchObject = {
    marqueStringa: "",
    modeleString: "",
    carbString: "",
    slideNombre: this.slideNombre,
    kilometrage: this.kilometrage,
    prix: this.prix,

    search(){

    }
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
      this.modeleBool = false ;
    }
    if(this.marqueString !== "Marque")
    this.marqueBool = !this.marqueBool;
  }

  changeStringMD(val: string): void{
    this.modeleString = val;
    this.searchObject.modeleString = val;
    this.modeleBool = !this.modeleBool;
  }


  changeStringCarb(val: string){
    this.carbString = val;
    this.searchObject.carbString = val;
    this.carbBool = !this.carbBool;
  }
  getPrice($event: any): void{
    console.log($event.target);

     this.searchObject.prix = $event.target.value;
  }
  //reset menu values
  myBigValider():void{
    //replace with  search and populate
    console.log(this.searchObject);

  //the big reset
  this.marqueString = "Marque";
  this.modeleString = "Modèle";
  this.carbString = "Carburant";
  this.slideNombre = "l'Annee";
  this.kilometrage = "kilometrage";
  this.prix = "prix";
  }
}

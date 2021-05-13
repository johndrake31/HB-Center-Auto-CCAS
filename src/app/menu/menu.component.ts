import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentYear = new Date().getFullYear();

  //tbls
  marques: string[]=["Marque", "ford", "audi", "tesla", "porsche", "mercedes", "chevrolet", "volkswagen" ];
  modele: string[]=["Modèle", "mod 1", "mod2","mod3"] ;
  carb: string[]= ["Carburant", "diesel", "essence", "électrique"]

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

  changeStringMQ(val: string): void{
    this.marqueString = val;
    if(this.marqueString == "Marque"){
      this.modeleString = "Modèle";
      this.modeleBool = false ;
    }
    this.marqueBool = !this.marqueBool;
  }

  changeStringMD(val: string): void{
    this.modeleString = val;
    this.modeleBool = !this.modeleBool;
  }
  changeStringCarb(val: string){
    this.carbString = val;
    this.carbBool = !this.carbBool;
  }

  toggleFatMenu():void{
    if(window.innerWidth){

    }
  }
  myBigValider():void{

  //reset
  this.marqueString = "Marque";
  this.modeleString = "Modèle";
  this.carbString = "Carburant";
  this.slideNombre = "l'Annee";
  this.kilometrage = "kilometrage";
  this.prix = "prix";

  }
}

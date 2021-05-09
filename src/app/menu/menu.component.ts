import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //open menu count
  openMenuCount= 0;
  //tbls
  marques: string[]=["Marque", "ford", "audi", "tesla", "porsche", "mercedes", "chevrolet", "volkswagen" ];
  modele: string[]=["Modèle", "mod 1", "mod2","mod3"] ;
  carb: string[]= ["Carburant", "Diesel", "Essence", "Électrique"]

  //bools
  marqueBool =  false;
  modeleBool = false;
  carbBool= false;

  //strings
  marqueString = "Marque";
  modeleString = "Modèle";
  carbString = "Carburant";

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
    this.carb[0] !== 'Carburant'? this.carb.unshift('Carburant') : this.carb.shift();
  }



  constructor() { }

  ngOnInit(): void {
  }

}

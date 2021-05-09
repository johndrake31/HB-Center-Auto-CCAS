
export class Car{

  constructor(private id:number,private modele: string, private _marque: string){
  }

   public get marque(): string {
    return this._marque;
  }




}

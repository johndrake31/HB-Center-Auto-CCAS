
export class Car {

  constructor(

    public id: number,
    public title: string,
    public description: string,
    public year: string,
    public kilometers: number,
    public brand: string,
    public model: string,
    public fuel: string,
    public garage: [] | null,
    public image: string,
    public user: [] | null,
    public price: number
  ) { }
}
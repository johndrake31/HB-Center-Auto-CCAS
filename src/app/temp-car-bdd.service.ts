import { Injectable } from '@angular/core';
import { Car } from './model/car.module';

@Injectable({
  providedIn: 'root'
})
export class TempCarBddService {

  constructor() { }


  cr1 = new Car(
    "12",
    "Mercedes-AMG-GTS-yellow-2016.jpg",
    "A-Class",
    "MERCEDES",
    "10300",
    "Blanc",
    "2017-06-05",
    "2021-08-24",
    "70300",
    "Diesel",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
    )

  cr2 = new Car(
    "11",
     "Mercedes-AMG-GTS-2016.jpg",
    "A-Class",
     "MERCEDES",
     "15300",
     "Gris",
     "2018-01-05",
     "2021-07-28",
     "15300",
     "Essence",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

     )
  cr3 = new Car(
     "9",
     "FORD-Ranger-Raptor-red-2018.jpeg",
     "Range",
     "FORD",
     "32400",
     "Rouge",
     "2021-05-11",
     "2021-07-27",
     "2300",
     "Essence",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
     )
 cr4 = new Car(
    "17",
    "Mercedes-Benz-GLA-silver-2020.jpg",
    "GLA",
    "MERCEDES",
    "32000",
    "Gris",
    "2019-06-13",
    "2021-07-24",
    "21300",
    "Diesel",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

 )
  cr5 = new Car(
     "8",
     "FORD-Ranger-Raptor-blue-2017.jpg",
     "Range",
     "FORD",
     "21400",
     "Bleu",
     "2020-06-22",
     "2021-07-15",
     "6040",
     "Diesel",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

  )
  cr6 = new Car(
    "7",
    "Ford-fusion-silver-2016.jpg",
    "Fusion",
    "FORD",
    "22000",
    "Silver",
    "2019-06-24",
    "2021-06-16",
    "12060",
    "Électrique",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
  )

  cr7 = new Car(
    "15",
    "Mercedes-Benz-A-Class-White-2020.jpg",
    "AMG-GTS",
    "MERCEDES",
    "41200",
    "Jaune",
    "2020-01-08",
    "2021-05-31",
    "41200",
    "Diesel",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

  )
  cr8 = new Car(
    "14",
    "Mercedes-Benz-A-Class-Sedan-silver-2020.jpeg",
    "AMG-GTS",
    "MERCEDES",
    "40300",
    "Gris",
    "2020-06-15",
    "2021-05-29",
    "40300",
    "Essence",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
  )
  cr9 = new Car(
    "6",
    "Ford-focus-st-orange-2019.jpg",
    "Focus",
    "FORD",
    "32500",
    "Orange",
    "2021-01-31",
    "2021-05-27",
    "5040",
    "Essence",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

  )
  cr10 = new Car(
    "18",
    "Mercedes-Benz-GLE-blue-2020.jpg",
    "GLE",
    "MERCEDES",
    "45000",
    "Bleu",
    "2021-01-13",
    "2021-05-26",
    "1300",
    "Essence",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

  )

    cr11 = new Car(
    "13",
    "Mercedes-Benz-A-Class-Sedan-RED-2017 .jpg",
    "AMG-GTR",
    "MERCEDES",
    "45200",
    "Vert",
    "2021-01-09",
    "2021-05-25",
    "45300",
    "Diesel",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
    )
    cr12 = new Car(
    "21",
    "porsche_356_silver_1960.jpg",
    "356",
    "PORSCHE",
    "15500",
    "Gris",
    "1960-06-05",
    "2021-05-24",
    "123030",
    "Essence",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
    )
    cr13 = new Car(
    "2",
    "Ford-Bronco-blue-2021.jpeg",
    "Bronco",
    "FORD",
    "15000",
    "Bleu",
    "2019-06-20",
    "2021-05-19",
    "10300",
    "Essence",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr14 = new Car(
    "20",
    "porsche_356_red_1960.jpg",
    "356",
    "PORSCHE",
    "22000",
     "Rouge",
     "1960-01-10",
     "2021-05-19",
     "112660",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr15 = new Car(
    "19",
    "mercedes-Benz-GLE-white-2020.jpg",
    "GLE",
     "MERCEDES",
     "34500",
     "Blanc",
     "2020-01-29",
     "2021-05-18",
     "6300",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr16 = new Car(
    "16",
    "Mercedes-Benz-C-Class-Sedan-silver-2016.jpg",
    "C-Class",
     "MERCEDES",
     "38350",
     "Gris",
     "2021-01-22",
     "2021-05-15",
     "2300",
    "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr17 = new Car(
    "5",
     "Ford-Focus-champian-2021.jpg",
     "Focus",
     "FORD",
     "21500",
     "Champian",
     "2020-06-22",
     "2021-05-14",
     "15450",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr18 = new Car(
      "4",
     "Ford-Focus-blue-2021.jpg",
     "Focus",
     "FORD",
     "12500",
     "Bleu",
     "2018-01-05",
     "2021-04-12",
     "20355",
     "Diesel",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr19 = new Car(
    "3",
     "ford-edge-orange-2016.jpg",
     "Edge",
     "FORD",
     "30000",
     "Orange",
     "2021-01-15",
     "2021-03-17",
     "5200",
     "Diesel",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
    )
    cr20 = new Car(
      '1',
     "ford-bronco-2-yellow-2021.jpg",
     "Bronco",
     "FORD",
     "20000",
     "Jaune",
     "2020-01-15",
     "2021-03-03",
     "1000",
     "Diesel",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr21 = new Car(
      "10",
     "Mercedes-AMG-GTR-road-2017.jpg",
     "A-Class",
     "MERCEDES",
     "35000",
     "Rouge",
     "2021-01-12",
     "2021-03-02",
     "35000",
    "Diesel",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr22 = new Car(
      "22",
     "porsche_911_yellow_1975.jpg",
     "911",
     "PORSCHE",
     "17400",
     "Rouge",
     "1975-01-13",
     "2021-03-15",
     "80600",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr23 = new Car(
      "23",
     "porsche-911-carrera-navy-blue-1985.jpg",
     "911",
     "PORSCHE",
     "18300",
     "Noir",
     "1985-01-20",
     "2021-02-21",
     "98500",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr24 = new Car(
      "24",
     "porsche-911-wide-body-white-1985.jpg",
     "911",
     "PORSCHE",
    "24000",
     "Blanc",
     "1985-06-23",
     "2021-04-01",
     "114300",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr25 = new Car(
      "26",
     "porsche-964-Carrera-black-1994.jpg",
     "964",
     "PORSCHE",
     "26000",
     "Noir",
     "1994-06-12",
     "2021-05-26",
     "80300",
     "Essence",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",

    )
    cr26 = new Car(
      "27",
     "porsche-gt3-white-2017.jpg",
     "GT3",
     "PORSCHE",
     "55000",
     "Blanc",
     "2017-01-30",
     "2020-12-15",
     "6300",
     "Essence",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque",
     )


  carList: Car[]=[
    this.cr1,
    this.cr2,
    this.cr3,
    this.cr4,
    this.cr5,
    this.cr6,
    this.cr7,
    this.cr8,
    this.cr9,
    this.cr10,
    this.cr11,
    this.cr12,
    this.cr13,
    this.cr14,
    this.cr15,
    this.cr16,
    this.cr17,
    this.cr18,
    this.cr19,
    this.cr20,
    this.cr21,
    this.cr22,
    this.cr23,
    this.cr24,
    this.cr25,
    this.cr26,
  ];

  getMarque(): string[]{
    const marqueArr = this.carList.map( e =>e.marque
    )
    const noDuplicates =  [...new Set(marqueArr)];
    return noDuplicates;
  }

}

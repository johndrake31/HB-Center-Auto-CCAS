"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(idVoiture, url, model, marque, prix, couleur, anneeDeMise, dateAdded, kilometrage, fuelType, discriptionXl, discriptionSm) {
        this.idVoiture = idVoiture;
        this.url = url;
        this.model = model;
        this.marque = marque;
        this.prix = prix;
        this.couleur = couleur;
        this.anneeDeMise = anneeDeMise;
        this.dateAdded = dateAdded;
        this.kilometrage = kilometrage;
        this.fuelType = fuelType;
        this.discriptionXl = discriptionXl;
        this.discriptionSm = discriptionSm;
    }
    return Car;
}());
exports.Car = Car;

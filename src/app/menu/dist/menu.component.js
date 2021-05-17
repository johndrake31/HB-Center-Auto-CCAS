"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.MenuComponent = void 0;
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(carServe) {
        this.carServe = carServe;
        this.carListingTbl = [];
        this.currentYear = new Date().getFullYear();
        //tbls
        this.marques = ["Marque", "ford", "audi", "tesla", "porsche", "mercedes", "chevrolet", "volkswagen"];
        this.modele = ["Modèle", "mod 1", "mod2", "mod3"];
        this.carb = ["Carburant", "diesel", "essence", "électrique"];
        //bools
        this.menuDisplayed = false;
        this.marqueBool = false;
        this.modeleBool = false;
        this.carbBool = false;
        this.slideBool = false;
        this.kmBool = false;
        this.prixBool = false;
        //strings
        this.marqueString = "Marque";
        this.modeleString = "Modèle";
        this.carbString = "Carburant";
        this.slideNombre = "l'Annee";
        this.kilometrage = "kilometrage";
        this.prix = "prix";
        this.searchObject = {
            marqueStringa: "",
            modeleString: "",
            carbString: "",
            slideNombre: this.slideNombre,
            kilometrage: this.kilometrage,
            prix: this.prix,
            search: function () {
            }
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.marques = this.carServe.getMarque();
        this.carListingTbl = this.carServe.carList;
    };
    MenuComponent.prototype.changeStringMQ = function (val) {
        var _this = this;
        this.marqueString = val;
        this.searchObject.marqueStringa = val;
        this.modeleString = "Modèle";
        var tempArr = this.carListingTbl.filter(function (e) { return e.marque.toLocaleLowerCase() == _this.marqueString.toLocaleLowerCase(); });
        var tempArr2 = tempArr.map(function (e) { return e.model; });
        var tempArr3 = __spreadArrays(new Set(tempArr2));
        this.modele = tempArr3;
        if (this.marqueString == "Marque") {
            this.modeleString = "Modèle";
            this.modeleBool = false;
        }
        if (this.marqueString !== "Marque")
            this.marqueBool = !this.marqueBool;
    };
    MenuComponent.prototype.changeStringMD = function (val) {
        this.modeleString = val;
        this.searchObject.modeleString = val;
        this.modeleBool = !this.modeleBool;
    };
    MenuComponent.prototype.changeStringCarb = function (val) {
        this.carbString = val;
        this.searchObject.carbString = val;
        this.carbBool = !this.carbBool;
    };
    MenuComponent.prototype.getPrice = function ($event) {
        console.log($event.target);
        this.searchObject.prix = $event.target.value;
    };
    //reset menu values
    MenuComponent.prototype.myBigValider = function () {
        //replace with  search and populate
        console.log(this.searchObject);
        //the big reset
        this.marqueString = "Marque";
        this.modeleString = "Modèle";
        this.carbString = "Carburant";
        this.slideNombre = "l'Annee";
        this.kilometrage = "kilometrage";
        this.prix = "prix";
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;

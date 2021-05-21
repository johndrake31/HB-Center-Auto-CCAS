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
        ///The horror Starts Here
        this.carListingTbl = [];
        this.currentYear = new Date().getFullYear();
        //tbls
        this.marques = ["volkswagen"];
        this.modele = ["Modèle"];
        this.carb = ["Carburant", "Électrique", "Essence", "Diesel"];
        //bools
        this.menuDisplayed = false;
        this.boolTbl = {
            marqueBool: false,
            modeleBool: false,
            carbBool: false,
            slideBool: false,
            kmBool: false,
            prixBool: false
        };
        //strings
        this.marqueString = "Marque";
        this.modeleString = "Modèle";
        this.carbString = "Carburant";
        this.slideNombre = "l'Annee";
        this.kilometrage = "kilometrage";
        this.prix = "prix";
        //filter view
        this.searchObject = {
            marqueStringa: "",
            modeleString: "",
            carbString: "",
            slideNombre: this.slideNombre,
            kilometrage: this.kilometrage,
            prix: this.prix
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carServe.getMarque().subscribe(function (marques) { return _this.marques = marques; });
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
            this.boolTbl.modeleBool = false;
        }
        if (this.marqueString !== "Marque")
            this.boolTbl.marqueBool = !this.boolTbl.marqueBool;
    };
    MenuComponent.prototype.changeStringMD = function (val) {
        this.modeleString = val;
        this.searchObject.modeleString = val;
        this.boolTbl.modeleBool = !this.boolTbl.modeleBool;
    };
    MenuComponent.prototype.changeStringCarb = function (val) {
        this.carbString = val;
        this.searchObject.carbString = val;
        this.boolTbl.carbBool = !this.boolTbl.carbBool;
    };
    MenuComponent.prototype.getPrice = function ($event) {
        console.log($event.target);
        this.searchObject.prix = $event.target.value;
    };
    //understand this
    MenuComponent.prototype.closeOtherMenues = function (state) {
        for (var a in this.boolTbl) {
            if (a !== state) {
                this.boolTbl[a] = false;
            }
        }
        this.boolTbl[state] = !this.boolTbl[state];
    };
    MenuComponent.prototype.myBigValider = function () {
        //the big reset
        this.marqueString = "Marque";
        this.modeleString = "Modèle";
        this.carbString = "Carburant";
        this.slideNombre = "l'Annee";
        this.kilometrage = "kilometrage";
        this.prix = "prix";
        for (var a in this.boolTbl) {
            this.boolTbl[a] = false;
        }
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

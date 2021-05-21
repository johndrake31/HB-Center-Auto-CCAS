"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BodyCarsComponent = void 0;
var core_1 = require("@angular/core");
var BodyCarsComponent = /** @class */ (function () {
    function BodyCarsComponent(carServe) {
        this.carServe = carServe;
        this.paginMin = 0;
        this.paginMax = 10;
        this.name = "9";
        this.tempCars = [];
    }
    BodyCarsComponent.prototype.ngOnInit = function () {
        this.tempCars = this.carServe.carList;
        // this.route.snapshot.params.subscribe(v => console.log(v));
    };
    BodyCarsComponent.prototype.changeSlice = function (n) {
        this.paginMin = n * 10;
        n == 0 ? this.paginMax = 10 : this.paginMax = this.paginMin + 10;
    };
    BodyCarsComponent.prototype.numSequence = function (n) {
        n = Math.ceil(n);
        return Array(n);
    };
    BodyCarsComponent = __decorate([
        core_1.Component({
            selector: 'app-body-cars',
            templateUrl: './body-cars.component.html',
            styleUrls: ['./body-cars.component.scss']
        })
    ], BodyCarsComponent);
    return BodyCarsComponent;
}());
exports.BodyCarsComponent = BodyCarsComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarCardsComponent = void 0;
var core_1 = require("@angular/core");
var car_module_1 = require("src/app/model/car.module");
var CarCardsComponent = /** @class */ (function () {
    function CarCardsComponent() {
        this.moreClicked = false;
        this.inputCars = new car_module_1.Car("999999", "99929929292", "21212", "121221", "32000", "Gris", "2019-06-13", "2021-07-24", "21300", "Diesel", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque, veniam necessitatibus fugit repudiandae ex ipsam nostrum nesciunt sequi tenetur, maxime autem, magni blanditiis voluptatem!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quas magni! Harum omnis consequuntur atque");
    }
    CarCardsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], CarCardsComponent.prototype, "inputCars");
    CarCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-car-cards',
            templateUrl: './car-cards.component.html',
            styleUrls: ['./car-cards.component.scss']
        })
    ], CarCardsComponent);
    return CarCardsComponent;
}());
exports.CarCardsComponent = CarCardsComponent;

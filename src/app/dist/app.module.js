"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var menu_component_1 = require("./menu/menu.component");
var body_cars_component_1 = require("./body-cars/body-cars.component");
var car_cards_component_1 = require("./car-cards/car-cards.component");
var footer_component_1 = require("./footer/footer.component");
var login_component_1 = require("./login/login.component");
var garage_component_1 = require("./garage/garage.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var home_component_1 = require("./home/home.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var mentions_legal_component_1 = require("./mentions-legal/mentions-legal.component");
var politique_confidentialite_component_1 = require("./politique-confidentialite/politique-confidentialite.component");
var conditions_utilisation_component_1 = require("./conditions-utilisation/conditions-utilisation.component");
var conditions_generales_component_1 = require("./conditions-generales/conditions-generales.component");
var home_btn_component_1 = require("./components/home-btn/home-btn.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                menu_component_1.MenuComponent,
                body_cars_component_1.BodyCarsComponent,
                car_cards_component_1.CarCardsComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                garage_component_1.GarageComponent,
                page_not_found_component_1.PageNotFoundComponent,
                home_component_1.HomeComponent,
                mentions_legal_component_1.MentionsLegalComponent,
                politique_confidentialite_component_1.PolitiqueConfidentialiteComponent,
                conditions_utilisation_component_1.ConditionsUtilisationComponent,
                conditions_generales_component_1.ConditionsGeneralesComponent,
                home_btn_component_1.HomeBtnComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

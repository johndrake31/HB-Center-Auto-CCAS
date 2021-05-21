"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var conditions_generales_component_1 = require("./footer/legal/conditions-generales/conditions-generales.component");
var conditions_utilisation_component_1 = require("./footer/legal/conditions-utilisation/conditions-utilisation.component");
var home_component_1 = require("./main-page-folder/home/home.component");
var login_component_1 = require("./login/login.component");
var mentions_legal_component_1 = require("./footer/legal/mentions-legal/mentions-legal.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var politique_confidentialite_component_1 = require("./footer/legal/politique-confidentialite/politique-confidentialite.component");
var profile_pro_component_1 = require("./user-pro-folder/profile-pro/profile-pro.component");
var profile_pro_info_form_component_1 = require("./user-pro-folder/profile-pro-info-form/profile-pro-info-form.component");
var garage_list_component_1 = require("./user-pro-folder/garage-list/garage-list.component");
var garage_component_1 = require("./user-pro-folder/garage/garage.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'home/:id', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //mention Legal Routes
    { path: 'mentionslegales', component: mentions_legal_component_1.MentionsLegalComponent },
    { path: 'politique', component: politique_confidentialite_component_1.PolitiqueConfidentialiteComponent },
    { path: 'conditions-utilisation', component: conditions_utilisation_component_1.ConditionsUtilisationComponent },
    { path: 'conditions-generales', component: conditions_generales_component_1.ConditionsGeneralesComponent },
    //User Pro et Garage Routes
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'userpro', component: profile_pro_component_1.ProfileProComponent },
    { path: 'mes-info', component: profile_pro_info_form_component_1.ProfileProInfoFormComponent },
    { path: 'mes-garages', component: garage_list_component_1.GarageListComponent },
    { path: 'garage', component: garage_component_1.GarageComponent },
    //Nothing else below this line
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

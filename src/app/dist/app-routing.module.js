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
var conditions_generales_component_1 = require("./conditions-generales/conditions-generales.component");
var conditions_utilisation_component_1 = require("./conditions-utilisation/conditions-utilisation.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var mentions_legal_component_1 = require("./mentions-legal/mentions-legal.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var politique_confidentialite_component_1 = require("./politique-confidentialite/politique-confidentialite.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'mentionslegales', component: mentions_legal_component_1.MentionsLegalComponent },
    { path: 'politique', component: politique_confidentialite_component_1.PolitiqueConfidentialiteComponent },
    { path: 'conditions-utilisation', component: conditions_utilisation_component_1.ConditionsUtilisationComponent },
    { path: 'conditions-generales', component: conditions_generales_component_1.ConditionsGeneralesComponent },
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

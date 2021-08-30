import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './main-page-folder/menu/menu.component';
import { BodyCarsComponent } from './main-page-folder/body-cars/body-cars.component';
import { CarCardsComponent } from '../../src/app/main-page-folder/car-cards/car-cards.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './main-page-folder/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentionsLegalComponent } from './footer/legal/mentions-legal/mentions-legal.component';
import { PolitiqueConfidentialiteComponent } from './footer/legal/politique-confidentialite/politique-confidentialite.component';
import { ConditionsUtilisationComponent } from './footer/legal/conditions-utilisation/conditions-utilisation.component';
import { ConditionsGeneralesComponent } from './footer/legal/conditions-generales/conditions-generales.component';
import { HomeBtnComponent } from './simple-components/home-btn/home-btn.component';
import { GarageListComponent } from './user-pro-folder/garage-list/garage-list.component';
import { GarageAjouterComponent } from './user-pro-folder/garage-ajouter/garage-ajouter.component';
import { GarageUpdateFormComponent } from './user-pro-folder/garage-update-form/garage-update-form.component';
import { ProfileProComponent } from './user-pro-folder/profile-pro/profile-pro.component';
import { ProfileProInfoFormComponent } from './user-pro-folder/profile-pro-info-form/profile-pro-info-form.component';


import { GarageAddCarFormComponent } from './user-pro-folder/garage-add-car-form/garage-add-car-form.component';
import { GarageComponent } from './user-pro-folder/garage/garage.component';
import { HttpClientModule } from '@angular/common/http';
import { GarageAdsComponent } from './user-pro-folder/garage-ads/garage-ads.component';
import { GarageAdsUpdateFormComponent } from './user-pro-folder/garage-ads-update-form/garage-ads-update-form.component';
import { AdminHomeComponent } from './adminArea/admin-home/admin-home.component';
import { RegesterUserComponent } from './adminArea/regester-user/regester-user.component';
import { UserListComponent } from './adminArea/user-list/user-list.component';
import { CarAdsListComponent } from './adminArea/car-ads-list/car-ads-list.component';
import { GarageListAdminComponent } from './adminArea/garage-list-admin/garage-list-admin.component';
import { UpdateUserProComponent } from './adminArea/update-user-pro/update-user-pro.component';
import { UpdateProGarageComponent } from './adminArea/update-pro-garage/update-pro-garage.component';
import { AdminCarCardComponent } from './adminArea/admin-car-card/admin-car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyCarsComponent,
    CarCardsComponent,
    FooterComponent,
    LoginComponent,
    GarageComponent,
    PageNotFoundComponent,
    HomeComponent,
    MentionsLegalComponent,
    PolitiqueConfidentialiteComponent,
    ConditionsUtilisationComponent,
    ConditionsGeneralesComponent,
    HomeBtnComponent,
    GarageListComponent,
    GarageAjouterComponent,
    GarageUpdateFormComponent,
    ProfileProComponent,
    ProfileProInfoFormComponent,
    GarageAddCarFormComponent,
    GarageAdsComponent,
    GarageAdsUpdateFormComponent,
    AdminHomeComponent,
    RegesterUserComponent,
    UserListComponent,
    CarAdsListComponent,
    GarageListAdminComponent,
    UpdateUserProComponent,
    UpdateProGarageComponent,
    AdminCarCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

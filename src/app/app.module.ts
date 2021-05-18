import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodyCarsComponent } from './body-cars/body-cars.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { GarageComponent } from './garage/garage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentionsLegalComponent } from './mentions-legal/mentions-legal.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { ConditionsUtilisationComponent } from './conditions-utilisation/conditions-utilisation.component';
import { ConditionsGeneralesComponent } from './conditions-generales/conditions-generales.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

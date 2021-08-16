import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsGeneralesComponent } from './footer/legal/conditions-generales/conditions-generales.component';
import { ConditionsUtilisationComponent } from './footer/legal/conditions-utilisation/conditions-utilisation.component';
import { HomeComponent } from './main-page-folder/home/home.component';
import { LoginComponent } from './login/login.component';
import { MentionsLegalComponent } from './footer/legal/mentions-legal/mentions-legal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolitiqueConfidentialiteComponent } from './footer/legal/politique-confidentialite/politique-confidentialite.component';
import { ProfileProComponent } from './user-pro-folder/profile-pro/profile-pro.component';
import { ProfileProInfoFormComponent } from './user-pro-folder/profile-pro-info-form/profile-pro-info-form.component';
import { GarageListComponent } from './user-pro-folder/garage-list/garage-list.component';
import { GarageComponent } from './user-pro-folder/garage/garage.component';
import { GarageAjouterComponent } from './user-pro-folder/garage-ajouter/garage-ajouter.component';
import { GarageAddCarFormComponent } from './user-pro-folder/garage-add-car-form/garage-add-car-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //mention Legal Routes
  { path: 'mentionslegales', component: MentionsLegalComponent },
  { path: 'politique', component: PolitiqueConfidentialiteComponent },
  { path: 'conditions-utilisation', component: ConditionsUtilisationComponent },
  { path: 'conditions-generales', component: ConditionsGeneralesComponent },

  //User Pro et Garage Routes
  { path: 'login', component: LoginComponent },
  { path: 'userpro', component: ProfileProComponent },
  { path: 'mes-info', component: ProfileProInfoFormComponent },
  { path: 'mes-garages', component: GarageListComponent },
  { path: 'create-car-ad/:id', component: GarageAddCarFormComponent },

  { path: 'garage/:id', component: GarageComponent },

  { path: 'add-garage', component: GarageAjouterComponent },

  //Nothing else below this line
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

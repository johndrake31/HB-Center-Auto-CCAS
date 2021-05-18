import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsGeneralesComponent } from './conditions-generales/conditions-generales.component';
import { ConditionsUtilisationComponent } from './conditions-utilisation/conditions-utilisation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MentionsLegalComponent } from './mentions-legal/mentions-legal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'mentionslegales',  component: MentionsLegalComponent },
  { path: 'politique',  component: PolitiqueConfidentialiteComponent },
  { path: 'conditions-utilisation',  component: ConditionsUtilisationComponent },
  { path: 'conditions-generales',  component: ConditionsGeneralesComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

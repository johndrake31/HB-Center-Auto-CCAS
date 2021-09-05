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
import { GarageAdsUpdateFormComponent } from './user-pro-folder/garage-ads-update-form/garage-ads-update-form.component';
import { RegesterUserComponent } from './adminArea/regester-user/regester-user.component';
import { AdminHomeComponent } from './adminArea/admin-home/admin-home.component';
import { UserListComponent } from './adminArea/user-list/user-list.component';
import { GarageListAdminComponent } from './adminArea/garage-list-admin/garage-list-admin.component';
import { UpdateUserProComponent } from './adminArea/update-user-pro/update-user-pro.component';
import { UpdateProGarageComponent } from './adminArea/update-pro-garage/update-pro-garage.component';
import { CarAdsListComponent } from './adminArea/car-ads-list/car-ads-list.component';
import { AdminCarAdUpdateComponent } from './adminArea/admin-car-ad-update/admin-car-ad-update.component';
import { AuthGuard } from './auth.guard';
import { AuthProUserGuard } from './auth-pro-user.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //mention Legal Routes
  { path: 'mentionslegales', component: MentionsLegalComponent },
  { path: 'politique', component: PolitiqueConfidentialiteComponent },
  { path: 'conditions-utilisation', component: ConditionsUtilisationComponent },
  { path: 'conditions-generales', component: ConditionsGeneralesComponent },

  { path: 'login', component: LoginComponent },


  //User Pro-Garage Routes
  { path: 'userpro', canActivate: [AuthProUserGuard], component: ProfileProComponent },
  { path: 'mes-info', canActivate: [AuthProUserGuard], component: ProfileProInfoFormComponent },
  { path: 'mes-garages', canActivate: [AuthProUserGuard], component: GarageListComponent },
  { path: 'create-car-ad/:id', canActivate: [AuthProUserGuard], component: GarageAddCarFormComponent },
  { path: 'update-ad-info/:id', canActivate: [AuthProUserGuard], component: GarageAdsUpdateFormComponent },
  { path: 'garage/:id', canActivate: [AuthProUserGuard], component: GarageComponent },
  { path: 'add-garage', canActivate: [AuthProUserGuard], component: GarageAjouterComponent },

  // ADMIN ROUTES
  { path: 'admin-menu', canActivate: [AuthGuard], component: AdminHomeComponent },
  { path: 'add-user', canActivate: [AuthGuard], component: RegesterUserComponent },
  { path: 'user-list', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'garage-list', canActivate: [AuthGuard], component: GarageListAdminComponent },
  { path: 'car-list', canActivate: [AuthGuard], component: CarAdsListComponent },
  { path: 'update-user-pro/:id', canActivate: [AuthGuard], component: UpdateUserProComponent },
  { path: 'update-pro-garage/:id', canActivate: [AuthGuard], component: UpdateProGarageComponent },
  { path: 'admin-car-ad-update/:id', canActivate: [AuthGuard], component: AdminCarAdUpdateComponent },


  //Nothing else below this line
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

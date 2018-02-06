import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactListComponent } from './contactsList.component';
import { ContactDetailComponent } from './contactDetail.component';
import { ContactResolve } from './contact.resolve';

export const AppRoutes:Routes = [
    { path:'login', component:LoginComponent },
    { path:'home', component:HomeComponent},
    { path:'signup', component:SignupComponent},
    { path:'contact/:id', component:ContactDetailComponent, resolve:{
        contact:ContactResolve
    }},
    { path:'', component:ContactListComponent},
    // { path: '', redirectTo: '/contact', pathMatch: 'full'}, // Default redirect
    { path:'**', component:PageNotFoundComponent}, //When there is no path match, use this for exceptions
  ];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsService } from './contact.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactListComponent } from './contactsList.component';
import { ContactDetailComponent } from './contactDetail.component';


const AppRoutes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'home', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'contact/:id', component:ContactDetailComponent},
  { path:'', component:ContactListComponent},
  // { path: '', redirectTo: '/contact', pathMatch: 'full'}, // Default redirect
  { path:'**', component:PageNotFoundComponent}, //When there is no path match, use this for exceptions
];
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing:true }
    ),
    BrowserModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

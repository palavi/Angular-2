import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';
import { ContactsService } from './contact.service';
import { ContactResolve } from './contact.resolve';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactListComponent } from './contactsList.component';
import { ContactDetailComponent } from './contactDetail.component';

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
      AppRoutes
    ),
    BrowserModule
  ],
  providers: [
    ContactsService,
    ContactResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

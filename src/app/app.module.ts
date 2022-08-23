import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { AllComponent } from './students/all/all.component';
import { WithBalanceComponent } from './students/with-balance/with-balance.component';
import { WithoutBalanceComponent } from './students/without-balance/without-balance.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentdashComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    StudentsComponent,
    AllComponent,
    WithBalanceComponent,
    WithoutBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

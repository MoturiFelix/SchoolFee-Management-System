import { WithoutBalanceComponent } from './students/without-balance/without-balance.component';
import { AllComponent } from './students/all/all.component';
import { StudentsComponent } from './students/students.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithBalanceComponent } from './students/with-balance/with-balance.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:StudentsComponent,
children:[
  {path:'all',component:AllComponent},
  {path:'with-balance',component:WithBalanceComponent},
  {path:'without-balance',component:WithoutBalanceComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

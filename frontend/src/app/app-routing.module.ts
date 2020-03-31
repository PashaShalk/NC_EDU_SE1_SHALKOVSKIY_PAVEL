import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './pages/login/login-page.component';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';


const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "registration", component: RegistrationPageComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

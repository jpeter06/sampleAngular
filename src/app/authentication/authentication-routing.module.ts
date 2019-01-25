import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'help',component:HelpComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

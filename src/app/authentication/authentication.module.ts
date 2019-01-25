import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [HelpComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports:[
    HelpComponent,  RegisterComponent
  ]
})
export class AuthenticationModule { }

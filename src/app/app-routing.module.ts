import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrimetableComponent } from './primetable/primetable.component';
import { FormComponent } from './form/form.component';
import { TemplateComponent } from './template/template.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'primetable',component:PrimetableComponent},
  {path:'form',component:FormComponent},
  {path:'templateForm',component:TemplateFormComponent},
  {path:'template',component:TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

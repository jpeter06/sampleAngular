import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule} from '@angular/forms';
import { PrimetableComponent } from './primetable/primetable.component';

import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import { FormComponent } from './form/form.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PrimetableComponent,
    FormComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

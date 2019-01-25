import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { PrimetableComponent } from './primetable/primetable.component';
import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { FormComponent } from './form/form.component';
import { ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { XxxModule } from './xxx/xxx.module';

import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPListener, HTTPStatus } from './app.interceptor';

const RxJS_Services = [HTTPListener, HTTPStatus];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    PrimetableComponent,
    FormComponent,
    TemplateComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationModule,
    XxxModule,
    TableModule,
    GrowlModule,
    TabViewModule,
    CodeHighlighterModule,
    PanelModule,
    ToastModule,
    MessageModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...RxJS_Services,
    { provide: HTTP_INTERCEPTORS, useClass: HTTPListener, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

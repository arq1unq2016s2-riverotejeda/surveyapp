import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }   from './home.component';
import { AppComponent }   from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule }                  from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MessageComponent } from './message.component';
import { RouterModule } from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {appRoutingProviders, routing} from "./app.routes";
import {StudentsComponent} from "./students.component";
import {StudentStaticsComponent} from "./student_statics.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {StudentCompletenessComponent} from "./student_completeness.component";
import {WelcomeComponent} from "./welcome.component";
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import {AuthComponent} from "./auth.component";
import {OverviewComponent} from "./overview.component";
import {AuthGuard} from "./security/auth.guard";
import {AllYearsStaticsComponent} from "./years_statics.component";


@NgModule({
  imports: [ BrowserModule ,
            AlertModule,
            ReactiveFormsModule,
            FormsModule,
            HttpModule ,
    routing],
  declarations: [ AppComponent,
    WelcomeComponent,
    HomeComponent,
    MessageComponent,
    DashboardComponent,
    StudentsComponent,
    StudentStaticsComponent,
    OverviewComponent,
    AuthComponent,
    StudentCompletenessComponent,
    AllYearsStaticsComponent],
  bootstrap:    [ AppComponent ],
  exports:      [ RouterModule ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    appRoutingProviders,
    AUTH_PROVIDERS,
    AuthGuard
  ],
})
export class AppModule { }


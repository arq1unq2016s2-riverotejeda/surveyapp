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
import {OverviewComponent} from "./overview.component";


@NgModule({
  imports: [ BrowserModule ,
            AlertModule,
            ReactiveFormsModule,
            FormsModule,
            HttpModule ,
    routing],
  declarations: [ AppComponent,
    HomeComponent,
    MessageComponent,
    DashboardComponent,
    StudentsComponent,
    StudentStaticsComponent,
    OverviewComponent],
  bootstrap:    [ AppComponent ],
  exports:      [ RouterModule ],
  providers: [
    appRoutingProviders
  ],
})
export class AppModule { }


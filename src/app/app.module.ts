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
import {StudentsComponent} from "./students.component";


@NgModule({
  imports:      [ BrowserModule ,
                  AlertModule,
                  ReactiveFormsModule,
                  FormsModule,
                  HttpModule ,
                  RouterModule.forRoot([
                    { path: '', component: HomeComponent}
                  ]),
                  RouterModule.forChild([
                    { path: 'message', component: MessageComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'students', component: StudentsComponent}
                  ])],
  declarations: [ AppComponent, HomeComponent, MessageComponent, DashboardComponent, StudentsComponent],
  bootstrap:    [ AppComponent]
//  exports:      [ Survey ]
})
export class AppModule { }


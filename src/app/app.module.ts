import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }   from './home.component';
import { AppComponent }   from './app.component';

import { FormsModule }                  from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MessageComponent } from './message.component';
import { RouterModule } from "@angular/router";


@NgModule({
  imports:      [ BrowserModule ,
                  ReactiveFormsModule,
                  FormsModule,
                  HttpModule ,
                  RouterModule.forRoot([
                    { path: '', component: HomeComponent}
                  ]),
                  RouterModule.forChild([
                    { path: 'message', component: MessageComponent }
                  ])],
  declarations: [ AppComponent, HomeComponent, MessageComponent ],
  bootstrap:    [ AppComponent]
//  exports:      [ Survey ]
})
export class AppModule { }


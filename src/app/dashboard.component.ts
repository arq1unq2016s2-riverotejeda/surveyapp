/**
 * Created by mar on 06/11/16.
 */


import {Component} from '@angular/core';
import {Auth} from "./services/auth.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/dashboard_template.html',
  styleUrls: [ './templates/dashboard_template.css' ]
})

export class DashboardComponent{
  constructor(private auth: Auth) {}
}


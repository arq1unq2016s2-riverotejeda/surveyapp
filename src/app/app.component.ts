/**
 * Created by mar on 05/11/16.
 */

import { Component } from '@angular/core';
import {Auth} from "./services/auth.service";


@Component({
  selector: 'my-home',
  providers: [ Auth ],
  templateUrl: './templates/app.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}
}

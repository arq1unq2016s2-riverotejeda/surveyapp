import { Component } from '@angular/core';
import {Auth} from "./services/auth.service";

@Component({
  selector: 'my-home',
  template: `
     <div>
      <div class="row">
        <div class="col-md-6">
          <button type="submit" class="btn btn-default btn-primary" (click)="auth.googleLogin()">Login with google</button>
        </div>
        <div class="col-md-10" style="margin-top: 10px;">
          <button type="submit" class="btn btn-default btn-danger" (click)="auth.miscrosoftLogin()">Login with Miscrosoft</button>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>  
`
})
export class AuthComponent {
  constructor(private auth: Auth) {}
}

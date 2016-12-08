import { Component } from '@angular/core';
import {Auth} from "./services/auth.service";

@Component({
  selector: 'my-home',
  template: `
    <div class="custom-container">
      <blockquote>
          <p>Bienvenidos a SurveyApp</p>
      </blockquote>
    </div>
    <router-outlet></router-outlet>  
`
})

export class WelcomeComponent {
  constructor(private auth: Auth) {}
}

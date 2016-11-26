import { Component } from '@angular/core';

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
}

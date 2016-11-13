import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
    <div class="custom-container">
      <blockquote>
          <p>Las siguientes opciones le permitirán administrar encuestas y alumnos</p>
      </blockquote>
    </div>
    <router-outlet></router-outlet>  
`
})
export class OverviewComponent {
}

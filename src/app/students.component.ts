/**
 * Created by mar on 06/11/16.
 */



import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "./model/student";


@Component({
  selector: 'dashboard-elem',
  templateUrl: 'templates/students_template.html'
})

export class StudentsComponent {

  public model = new Student("", "");
  constructor(private route: ActivatedRoute, private router: Router){


  }




  goToThanksPage(){
    this.router.navigate(['/message', {mes: 'Alumno guardado correctamente'}] );

  }
}

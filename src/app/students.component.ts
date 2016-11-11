
/**
 * Created by mar on 06/11/16.
 */



import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "./model/student";
import {StudentService} from "./services/student.service";


@Component({
  selector: 'dashboard-elem',
  templateUrl: 'templates/students_template.html',
  providers: [StudentService]
})

export class StudentsComponent {

  public model = new Student("", "");
  active = true;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService){}

  onSubmit() {
    this.studentService.saveStudent(this.model).subscribe(
      response => console.log(response),
      () => console.log('Student successfully saved')
    );
    this.goToThanksPage();
  }


  goToThanksPage(){
    this.router.navigate(['/message', {mes: 'Alumno guardado correctamente'}] );
  }
}

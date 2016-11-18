import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SubjectService} from "./services/subject.service";
import Any = jasmine.Any;

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [SubjectService]
})
export class StudentStaticsComponent implements OnInit{

  subjectsStatistics: Any[];
  constructor(private subjectService: SubjectService,
              private router: Router){
  }


  ngOnInit() :void{
    this.getStatistics();
  }


  getStatistics() {
    this.subjectService.getSubjectsStatistics()
      .subscribe(
        res => {
          this.subjectsStatistics = res;
        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }

}

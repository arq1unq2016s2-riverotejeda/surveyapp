import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {Subject} from "./model/subject";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService]
})
export class StudentStaticsComponent implements OnInit{
  status ="success";
  subjectsStatistics: Any[];
  constructor(private staticsService: StaticsService,
              private router: Router){

  }

  ngOnInit() :void{
    this.getStatistics();
  }

  getStatistics() {
    this.staticsService.getSubjectsStatistics()
      .subscribe(
        res => {
          this.subjectsStatistics = res;
          console.log(this.subjectsStatistics);

        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }

  getStatus(subject: Subject): String{

}
/*
  getClasses() {
    return {
      'panel': true,
      'panel-default': !this.seleccion,
      'panel-success': this.seleccion
    };
  }*/

}

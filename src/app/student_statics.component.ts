import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {Subject} from "./model/subject";
import {Completeness} from "./model/completeness";
import {SubjectStatistic} from "./model/subject_statistic";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService]
})
export class StudentStaticsComponent implements OnInit{
  subjectsStatistics: SubjectStatistic[];
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
          //this.subjectsStatistics = res;
          //console.log(res);
          this.subjectsStatistics  = this.makeJson(res);
          //console.log(this.subjectsStatistics);
        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }

  makeJson(se: SubjectStatistic[]): SubjectStatistic[]{
    let res: SubjectStatistic[] = [];
    for (let index in se){
      var sub =    se[index];
      var stat = new SubjectStatistic(sub.subject, sub.comision, sub.occupation, sub.percentage);
      res[index] = stat;
     }
     return res;

  }


}

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {SubjectStatistic} from "./model/subject_statistic";
import {SubjectService} from "./services/subject.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService, SubjectService]
})
export class StudentStaticsComponent implements OnInit{
  subjectsStatistics: SubjectStatistic[];
  private year: string;


  constructor(private staticsService: StaticsService,
              private subjectService: SubjectService,
              private router: Router,
              private route: ActivatedRoute){
  }

  ngOnInit() :void{
    this.route.params.subscribe(params => {
        if(params['year']){
          this.year = params['year'];
          this.getStatistics();

        }else{
          this.subjectService.getLastActiveYear().subscribe(
            res => {
              this.year = res;
              this.getStatistics();
            });
        }
    });

  }

  getStatistics() {
    this.staticsService.getSubjectsStatistics(this.year)
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

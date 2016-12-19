import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {SubjectService} from "./services/subject.service";
import {SubjectStatistic, ComisionData, Statistic} from "./model/subject_statistic";


@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService, SubjectService]
})
export class StudentStaticsComponent implements OnInit{
  public statistics: Statistic[];
  private year: string;

  subjectsStatisticsBySubject: any;


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
          this.statistics  = this.makeJson(res);
        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }


  makeJson(se: Statistic[]): Statistic[]{
    let res: Statistic[] = [];
    for (let index in se){
      var sub =  se[index];
      var c1 = new ComisionData("C1", sub.c1.occupation, sub.c1.quota);
      var c2 = new ComisionData("C2", sub.c2.occupation, sub.c2.quota);
      var c3 = new ComisionData("C3", sub.c3.occupation, sub.c3.quota);
      var c4 = new ComisionData("C4", sub.c4.occupation, sub.c4.quota);
      var stat = new Statistic(sub.subject, sub.not_yet, sub.approved, sub.bad_schedule, c1, c2, c3, c4);
      res[index] = stat;
     }
     return res;
  }



  /*groupStatistics(){
    this.subjectsStatisticsBySubject = [];
    var statistics = [];
    for(var index in this.subjectsStatistics){
      var currentSubject = this.subjectsStatistics[index];
      statistics[currentSubject.subject] = [];
    }

    for(var index in this.subjectsStatistics){
      var currentSubject = this.subjectsStatistics[index];
      statistics[currentSubject.subject].push(currentSubject);
    }

    var statisticsBySubject = [];
    for(var index in statistics){
      var listC = [];
      for(var i in statistics[index]){
        var currentStatistic = statistics[index][i];
        var com = new ComisionData(currentStatistic.comision, currentStatistic.percentage, currentStatistic.occupation);
        listC.push({clave: currentStatistic.comision, valor: com})
      }
      statisticsBySubject.push({clave : index, valor :listC});
    }

    for(var index in statisticsBySubject){
      var current = statisticsBySubject[index];
        var s = new Statistic(current.clave,  0, 0, 0);
        for(var i in current.valor){
          var c = current.valor[i];
          if (c.clave == "C1") {
            s.c1 = c.valor;
          }
          if (c.clave == "C2") {
            s.c2 = c.valor;
          }
          if (c.clave == "C3") {
            s.c3 = c.valor;
          }
          if (c.clave == "C4") {
            s.c4 = c.valor;
          }
        }
        this.subjectsStatisticsBySubject.push(s);
    }
  }*/



}

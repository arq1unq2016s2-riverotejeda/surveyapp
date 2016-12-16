import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {Subject} from "./model/subject";
import {Completeness} from "./model/completeness";
import {SubjectStatistic, ComisionData, Statistic} from "./model/subject_statistic";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService]
})
export class StudentStaticsComponent implements OnInit{
  subjectsStatistics: SubjectStatistic[];
  subjectsStatisticsBySubject: any;
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
          //console.log(res);
          this.subjectsStatistics  = this.makeJson(res);
          this.groupStatistics();
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

  orderStatistics(se: SubjectStatistic[]){
    var res;
    return  res;
  }


  groupStatistics(){
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
    //console.log(this.subjectsStatisticsBySubject);
  }



}

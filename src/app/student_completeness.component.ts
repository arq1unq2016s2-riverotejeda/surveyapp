import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {Completeness} from "./model/completeness";
import {StaticsService} from "./services/statics.service";
import {SubjectService} from "./services/subject.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_completeness_template.html',
  styleUrls: [ './templates/font-awesome.min.css', './templates/custom.min.css','./templates/student_completeness.css'],
  providers: [StaticsService, SubjectService]
})
export class StudentCompletenessComponent implements OnInit{

  subjectsCompleteness: Completeness;
  private year: null;

  constructor(private staticsService: StaticsService,
              private subjectService: SubjectService,
              private router: Router){


  }

  ngOnInit() :void{
    this.getCompleteness();
  }

  public getCompleteness(){

    this.subjectService.getLastActiveYear().subscribe(
      res => {
        this.staticsService.getSurveyCompletition(res)
          .subscribe(
            completition => {
              this.subjectsCompleteness= completition;
            },
            error => console.log("Error HTTP GET Service") // in case of failure show this message
          );
      });
  }
}

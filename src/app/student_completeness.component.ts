import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {Completeness} from "./model/completeness";
import {StaticsService} from "./services/statics.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_completeness_template.html',
  styleUrls: [ './templates/font-awesome.min.css', './templates/custom.min.css'],


  providers: [StaticsService]
})
export class StudentCompletenessComponent implements OnInit{

  subjectsCompleteness: Completeness;

  constructor(private staticsService: StaticsService,
              private router: Router){
  }

  ngOnInit() :void{
    this.getCompleteness();
  }

  public getCompleteness(){

    this.staticsService.getSurveyCompletition()
      .subscribe(
        completition => {
          this.staticsService.getSurveyData()
            .subscribe(
              data => {
                this.subjectsCompleteness= new Completeness(data.cant_students,
                  data.cant_surveys, completition);

                },
              error => console.log("Error HTTP GET Service") // in case of failure show this message
            );
        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }
}

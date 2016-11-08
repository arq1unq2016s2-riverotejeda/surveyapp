/**
 * Created by mar on 06/11/16.
 */


import {Component, OnInit} from '@angular/core';
import {Subject} from "./model/subject";
import {Observable} from "rxjs";
import {SubjectService} from "./services/subject.service";
import {SurveyService} from "./services/survey.service";


@Component({
  selector: 'my-home',
  templateUrl: './templates/dashboard_template.html',
  providers: [SubjectService, SurveyService]
})

export class DashboardComponent implements OnInit{

  subjects: Subject[];
  constructor(private subjectService: SubjectService) {

  }

  // Load data ones componet is ready
  ngOnInit() {
   this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(
        res =>
          this.subjects = res,
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }

}


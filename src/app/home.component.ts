import {Component, OnInit} from '@angular/core';

import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject.service';
import {SurveyService} from "./services/survey.service";
import {Subject, SubjectStatusTranslator} from "./model/subject.ts";
import {Survey, SelectedSubject} from "./model/survey.ts";



@Component({
  selector: 'my-home',
  templateUrl: './templates/home_template.html',
  providers: [SubjectService, SurveyService]
})

export class HomeComponent implements OnInit{
    public mySubjects: Subject[];
    public model = HomeComponent.getEmptyDefaultSurvey();
    public active = true;

    constructor(private subjectService: SubjectService, private surveyService: SurveyService){}

    private static getEmptyDefaultSurvey() {
      return new Survey("", "", []);
    }

    ngOnInit(): void {
          this.getSubjects();
    }

    getSubjects() {
        this.subjectService.getSubjects()
            .subscribe(
                res => {
                    res.map(survey => {
                        for (let option of survey.options){
                            var option_translated = SubjectStatusTranslator.subjectStatusMessage[option];
                            survey.general_options.push(option_translated);
                        }
                    });
                    this.mySubjects = res;
                },
                error => console.log("Error HTTP GET Service") // in case of failure show this message
            );
    }

    addSubject(subjectName:string, event){
        var option = (<HTMLSelectElement>event.srcElement).value;
        //check if already exist
        var existentSubject = this.model.selected_subjects.filter(subject => subject.subject == subjectName);

        if(existentSubject.length>=1){
             this.model.selected_subjects.map(subject => {
               if (subject.subject == subjectName){
                 subject.status = option
               }
             });
          }else{
            this.model.selected_subjects.push(new SelectedSubject(subjectName, option));
          }
    }

    onSubmit() {
        this.model.selected_subjects.map(selected => {
            var status = SubjectStatusTranslator.getSubjectStatusCodeByMessage(selected.status);
            if(status){
                selected.status = status;
            }
        });

        this.surveyService.saveSurvey(this.model).subscribe(
            response => console.log('Survey successfully saved'), // redirect to thanks page
            error => console.log(error)// redirect to error page
        );
    }
}


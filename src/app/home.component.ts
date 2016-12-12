import {Component, OnInit} from '@angular/core';

import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject.service';
import {SurveyService} from "./services/survey.service";
import {Subject, SubjectStatusTranslator} from "./model/subject.ts";
import {Survey, SelectedSubject} from "./model/survey.ts";
import {Router, ActivatedRoute} from "@angular/router";



@Component({
  selector: 'my-home',
  templateUrl: './templates/home_template.html',
  providers: [SubjectService, SurveyService],
  styleUrls: [ './templates/home.css' ]
})

export class HomeComponent implements OnInit{
    public mySubjects: Subject[];
    public groupedSubjects: any;
    public model;
    private token;

    constructor(private subjectService: SubjectService,
                private surveyService: SurveyService,
                private router: Router,
                private route: ActivatedRoute ){}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.token = params['token'];

      });
      this.getSubjects();
    }

    getSubjects() {
        this.subjectService.getSubjects(this.token)
            .subscribe(
                res => {
                    res.options.map(survey => {
                        for (let option of survey.options){
                            var option_translated = SubjectStatusTranslator.subjectStatusMessage[option];
                            survey.general_options.push(option_translated);
                        }
                    });
                    this.mySubjects = res.options;
                    this.groupSubjects();
                    this.model=new Survey(res.student_name, res.legajo,this.token, []);
                },
                error => console.log("Error HTTP GET Service") // in case of failure show this message
            );
    }


    groupSubjects(){

      var groupedSubjects2 = [];
      for(var index in this.mySubjects){
        var currentSubject = this.mySubjects[index];
        groupedSubjects2[currentSubject.group] = [];
      }

      for(var index in this.mySubjects){
        var currentSubject = this.mySubjects[index];
        groupedSubjects2[currentSubject.group].push(currentSubject);
      }


      this.groupedSubjects = [];
      for(var index in groupedSubjects2){
        this.groupedSubjects.push({clave : index, valor :groupedSubjects2[index]});
      }
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
            response => {
              console.log('Survey successfully saved')
            },
            error =>{
              console.log(error);
              this.router.navigate(['/message', {mes: 'Hubo un error al guardar la encuesta'}] )
            }
    );
      this.goToThanksPage();
    }

    goToThanksPage(){
      this.router.navigate(['/message', {mes: 'Gracias por completar la encuesta'}] );
    }
}


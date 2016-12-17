import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";
import {SubjectService} from "./services/subject.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/years_list_template.html',
  providers: [StaticsService, SubjectService]
})
export class AllYearsStaticsComponent implements OnInit{

  public activeYears: [string];

  constructor(private staticsService: StaticsService,
              private subjectService: SubjectService,
              private router: Router){


  }

  ngOnInit() :void{
    this.subjectService.getAllYears().subscribe(res=>{
      this.activeYears = res;
    });
  }


}

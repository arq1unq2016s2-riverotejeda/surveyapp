import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Any = jasmine.Any;
import {StaticsService} from "./services/statics.service";

@Component({
  selector: 'my-home',
  templateUrl: './templates/student_statics_template.html',
  providers: [StaticsService]
})
export class StudentStaticsComponent implements OnInit{

  subjectsStatistics: Any[];
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
          this.subjectsStatistics = res;
        },
        error => console.log("Error HTTP GET Service") // in case of failure show this message
      );
  }

}

/**
 * Created by mar on 06/11/16.
 */



import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'dashboard-elem',
  templateUrl: 'templates/students_template.html'
})

export class StudentsComponent {

  constructor(private route: ActivatedRoute){}

}

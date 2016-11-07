/**
 * Created by mar on 06/11/16.
 */



import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'dashboards',
  templateUrl: './templates/subjects_template.html'
})

export class SubjectsComponent {

  constructor(private route: ActivatedRoute){}

}

/**
 * Created by mar on 05/11/16.
 */

import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ActivatedRoute, Params} from "@angular/router";



@ Component({
  selector: 'my-home',
  templateUrl: './templates/message_template.html'
})

export class MessageComponent implements OnInit{

  public message: String;

  constructor (private route: ActivatedRoute){
  }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.message = params['mes'];
    });
  }
}

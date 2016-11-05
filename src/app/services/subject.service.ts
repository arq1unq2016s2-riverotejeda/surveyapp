/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Configuration} from '../home.constants'
import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map'
import {Subject} from "../model/subject";



@Injectable()
export class SubjectService {

    constructor(private _http:Http) {}

    public getSubjects (): Observable<Subject[]> {
        return this._http.get(`${Configuration.API_ENDPOINT}/subjects`).
        map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(Configuration.API_ENDPOINT);

      return body;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

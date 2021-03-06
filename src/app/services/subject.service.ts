/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Configuration} from '../home.constants'
import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map'
import {SurveyModel} from "../model/subject";
import Any = jasmine.Any;

@Injectable()
export class SubjectService {

  constructor(private _http: Http) {
  }

  public getSubjects(token: string, year:string): Observable<SurveyModel> {
    return this._http.get(`${Configuration.API_ENDPOINT}/subjects/${token}/${year}`).map(this.extractData).catch(this.handleError);
  }

  public getLastActiveYear(): Observable<string> {
    return this._http.get(`${Configuration.API_ENDPOINT}/getLastActiveYear`).map(this.extractData).catch(this.handleError);
  }

  public getAllYears(): Observable<[string]> {
    return this._http.get(`${Configuration.API_ENDPOINT}/getAllYears`).map(this.extractData).catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

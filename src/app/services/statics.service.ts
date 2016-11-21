
import {Injectable} from '@angular/core';
import {Configuration} from '../home.constants'
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map'
import Any = jasmine.Any;
import {SurveyData} from "../model/completeness";


@Injectable()
export class StaticsService {

  constructor(private _http: Http) {
  }

  public getSurveyData(): Observable<SurveyData>{
    return this._http.get(`${Configuration.API_ENDPOINT}/surveysData`).map(this.extractData).catch(this.handleError);
  }

  public getSurveyCompletition(): Observable<number>{
    return this._http.get(`${Configuration.API_ENDPOINT}/surveyscompletition`).map(this.extractData).catch(this.handleError);
  }

  public getSubjectsStatistics(): Observable<Any[]> {
    return this._http.get(`${Configuration.API_ENDPOINT}/subjectsOccupation`).map(this.extractData).catch(this.handleError);
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
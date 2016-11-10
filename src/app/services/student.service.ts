/**
 * Created by mtejeda on 10/11/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Student} from "../model/student";
import {Configuration} from "../home.constants";


@Injectable()
export class StudentService {

  constructor(private _http:Http) {}

  public saveStudent (student: Student): Observable<Student> {

    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

    return this._http
      .post(`${Configuration.API_ENDPOINT}/student`, student, { headers: headers })
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

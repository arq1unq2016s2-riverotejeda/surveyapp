
/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Survey} from "../model/survey";
import {Configuration} from "../home.constants";


@Injectable()
export class SurveyService {

    constructor(private _http:Http) {}

    public saveSurvey (survey: Survey): Observable<Survey> {

        let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        return this._http
            .post(`${Configuration.API_ENDPOINT}/survey`, survey, { headers: headers })
            .map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

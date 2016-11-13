/**
 * Created by mar on 22/10/16.
 */

import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()
export class Configuration {
    public static SERVER: string = environment.surveyBackendHost;
    public static API_ENDPOINT: string = Configuration.SERVER;
}

/**
 * Created by mar on 22/10/16.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:9090";
    public ApiUrl: string = "/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public static get API_ENDPOINT(): string { return 'http://localhost:9090'; }
}
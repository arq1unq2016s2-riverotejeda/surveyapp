
import {environment} from "../../environments/environment";

interface AuthConfiguration {
  clientID: string,
  domain: string,
  callbackURL: string
}

export const myConfig: AuthConfiguration = {
  clientID: 'svUHGcSx6VR08DYiwVLIqE2AALp9232t',
  domain: 'surveyunq.auth0.com',
  callbackURL: environment.surveyAppHostCallback
};

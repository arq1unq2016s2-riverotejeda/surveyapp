import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import {myConfig} from "../model/auth.config";

// Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class Auth {
  // Configure Auth0
  auth0 = new Auth0({
    domain: myConfig.domain,
    clientID: myConfig.clientID,
    callbackOnLocationHash: true,
    callbackURL: myConfig.callbackURL,
  });

  constructor(private router: Router) {
    var result = this.auth0.parseHash(window.location.hash);

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);
      this.router.navigate(['/#/dashboard/overview']);
    } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }

  public googleLogin() {
    this.auth0.login({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public miscrosoftLogin() {
    this.auth0.login({
      connection: 'windowslive'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  };
}

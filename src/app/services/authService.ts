import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Customer} from '../models/customer';
import {Team} from '../models/team';
import {ApplicationConstants} from "../constants/applicationConstants";
import {AuthResult} from "../models/authResult";

@Injectable()
export class AuthService {

  private authUrl = 'http://' + ApplicationConstants.HOST_IP + ':80/rest/auth';  // URL to web API

  constructor(private http:Http) {
  }

  // Get all teams
  verifyCaptainId(captainId):Promise<AuthResult> {
    return this.http.get(this.authUrl + "/" + captainId)
      .toPromise()
      .then(response => {
        console.log("output received" + response);
        return response.json() as AuthResult;
      })
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

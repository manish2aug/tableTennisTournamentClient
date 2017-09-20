import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Customer} from '../models/customer';
import {Team} from '../models/team';
import {ApplicationConstants} from "../constants/applicationConstants";

@Injectable()
export class TeamService {

  private teamUrl = ApplicationConstants.SERVICE_ENDPOINT + '/rest/teams';  // URL to web API

  constructor(private http:Http) {
  }

  // Get all teams
  getTeams():Promise<Team[]> {
    return this.http.get(this.teamUrl)
      .toPromise()
      .then(response => {
        console.log("output received" + response);
        return response.json() as Team[];
      })
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

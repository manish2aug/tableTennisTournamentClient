import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Participant} from "../models/participant";
import {ApplicationConstants} from "../constants/applicationConstants";

@Injectable()
export class ParticipantService {

  private teamUrl = 'http://' + ApplicationConstants.HOST_IP + ':80/rest/players';  // URL to web API

  constructor(private http:Http) {
  }

  getTeamsParticipants(teamId):Promise<Participant[]> {
    return this.http.get(this.teamUrl + "?teamId=" + teamId)
      .toPromise()
      .then(response => response.json() as Participant[])
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}

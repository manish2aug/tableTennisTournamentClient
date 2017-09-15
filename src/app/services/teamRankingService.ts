import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {SingleGame} from "../models/singleGame";
import {TeamRanking} from "../models/teamRanking";
import {ApplicationConstants} from "../constants/applicationConstants";

@Injectable()
export class TeamRankingService {

  private url = 'http://' + ApplicationConstants.HOST_IP + ':80/rest/teamrankings';  // URL to web API

  constructor(private http: Http) { }

  // Get all teams
  getTeamRanking(): Promise<TeamRanking[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => {
                 console.log("output received"+response);
                 return response.json() as TeamRanking[];})
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

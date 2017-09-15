import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {SingleGame} from "../models/singleGame";
import {ApplicationConstants} from "../constants/applicationConstants";

@Injectable()
export class SingleGameService {

  private singleGamesUrl = 'http://' + ApplicationConstants.HOST_IP + ':80/rest/singles';  // URL to web API

  constructor(private http: Http) { }

  // Get all teams
  getSingleGameResults(): Promise<SingleGame[]> {
    return this.http.get(this.singleGamesUrl)
               .toPromise()
               .then(response => {
                 console.log("output received"+response);
                 return response.json() as SingleGame[];})
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

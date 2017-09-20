import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DoubleGame} from "../models/doubleGame";
import {ApplicationConstants} from "../constants/applicationConstants";
import {DoubleGameWriteRepresentation} from "../models/doubleGameWriteRepresentation";

@Injectable()
export class DoubleGameService {

  private url = ApplicationConstants.SERVICE_ENDPOINT + '/rest/doubles';  // URL to web API

  constructor(private http:Http) {
  }

  // Get all teams
  getDoubleGameResults():Promise<DoubleGame[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        console.log("output received" + response);
        return response.json() as DoubleGame[];
      })
      .catch(this.handleError);
  }

  saveGames(games:DoubleGameWriteRepresentation[]):Promise<void> {
    return this.http.post(this.url, games)
      .toPromise()
      .then(response => {
        if (response.status == 201) {
          alert("Saved successfully");
        }
      })
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

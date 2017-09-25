import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DoubleGame} from "../models/doubleGame";
import {ApplicationConstants} from "../constants/applicationConstants";
import {DoubleGameWriteRepresentation} from "../models/doubleGameWriteRepresentation";
import {DoubleGameWriteRepresentationContainer} from "../models/doubleGameWriteRepresentationContainer";

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

  saveGames(gamesContainer:DoubleGameWriteRepresentationContainer):Promise<void> {
    return this.http.post(this.url, gamesContainer)
      .toPromise()
      .then(response => {
        if (response.status == 201) {
          alert("Saved successfully");
        }
      })
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    if (error.status == 401) {
      alert("Supplied Captain ID is not correct !!");
    } else if (error.status == 400) {
      alert("Please set Captain ID before making the call to update game score!");
    }
    return Promise.reject(error.message || error);
  }
}

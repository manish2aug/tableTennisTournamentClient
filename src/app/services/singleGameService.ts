import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {SingleGame} from "../models/singleGame";
import {ApplicationConstants} from "../constants/applicationConstants";
import {SingleGameWriteRepresentation} from "../models/singleGameWriteRepresentation";
import {SingleGameWriteRepresentationContainer} from "../models/singleGameWriteRepresentationContainer";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class SingleGameService {

  private singleGamesUrl = ApplicationConstants.SERVICE_ENDPOINT + '/rest/singles';  // URL to web API

  constructor(private http:Http) {
  }

  // Get all teams
  getSingleGameResults():Promise<SingleGame[]> {
    return this.http.get(this.singleGamesUrl)
      .toPromise()
      .then(response => {
        console.log("output received" + response);
        return response.json() as SingleGame[];
      })
      .catch(this.handleError);
  }

  saveGames(gameContainer:SingleGameWriteRepresentationContainer):Promise<void> {
    return this.http.post(this.singleGamesUrl, gameContainer)
      .toPromise()
      .then(response => {
        console.log("response status" + response.status);
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

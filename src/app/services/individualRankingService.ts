import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {IndividualRanking} from "../models/individualRanking";
import {ApplicationConstants} from "../constants/applicationConstants";

@Injectable()
export class IndividualRankingService {

  private url = ApplicationConstants.SERVICE_ENDPOINT + '/rest/individualranking';  // URL to web API

  constructor(private http: Http) { }

  // Get all individuals
  getIndividualRanking(): Promise<IndividualRanking[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => {
                 console.log("output received"+response);
                 return response.json() as IndividualRanking[];})
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

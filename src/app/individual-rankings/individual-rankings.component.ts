import {Component, enableProdMode} from "@angular/core";
import {IndividualRankingService} from "../services/individualRankingService";
import {IndividualRanking} from "../models/individualRanking";
enableProdMode();

@Component({
  selector: 'individual-rankings',
  templateUrl: './individual-rankings.component.html',
  providers: [IndividualRankingService]
})
export class IndividualRankingComponent {

  individualRanking:IndividualRanking[];

  constructor(private individualRankingService:IndividualRankingService) {
  }

  getIndividualRanking() {
    console.log("getIndividualRanking() invoked");
    return this.individualRankingService.getIndividualRanking().then(results => this.individualRanking = results);
  }

  ngOnInit():void {
    this.getIndividualRanking();
  }

}

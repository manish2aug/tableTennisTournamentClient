import {Component, enableProdMode} from "@angular/core";
import {TeamRankingService} from "../services/teamRankingService";
import {TeamRanking} from "../models/teamRanking";
enableProdMode();

@Component({
  selector: 'team-rankings',
  templateUrl: './team-rankings.component.html',
  providers: [TeamRankingService]
})
export class TeamRankingComponent {

  teamRanking:TeamRanking[];

  constructor(private teamRankingService:TeamRankingService) {
  }

  getTeamRanking() {
    console.log("getTeamRanking() invoked");
    return this.teamRankingService.getTeamRanking().then(results => this.teamRanking = results);
  }

  ngOnInit():void {
    this.getTeamRanking();
  }

}

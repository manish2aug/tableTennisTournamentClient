import {Component, enableProdMode} from "@angular/core";
import {SingleGame} from "../models/singleGame";
import {SingleGameService} from "../services/singleGameService";
import {DoubleGameService} from "../services/doubleGameService";
import {DoubleGame} from "../models/doubleGame";
enableProdMode();

@Component({
  selector: 'single-game',
  templateUrl: './singlematch-details.component.html',
  styleUrls: ['./singlematch-details.component.css'],
  providers: [SingleGameService, DoubleGameService]
})
export class SingleGameComponent {

  singleGames:SingleGame[];
  doubleGames:DoubleGame[];

  constructor(private singleGameService:SingleGameService, private doubleGameService:DoubleGameService) {
  }

  getSingleGamesResults() {
    console.log("getSingleGamesResults() invoked");
    return this.singleGameService.getSingleGameResults().then(results => this.singleGames = results);
  }

  getDoubleGamesResults() {
    console.log("getDoubleGamesResults() invoked");
    return this.doubleGameService.getDoubleGameResults().then(results => this.doubleGames = results);
  }

  ngOnInit():void {
    this.getSingleGamesResults();
    this.getDoubleGamesResults();
  }

}

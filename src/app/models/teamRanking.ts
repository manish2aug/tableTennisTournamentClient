import {Score} from "./score";
export class TeamRanking {
  constructor(public name:string,
              public points:string,
              public displayPoints:string,
              public noOfGames:number,
              public noOfSingleGames:number,
              public noOfDoubleGames:number,
              public noOfSingleGamesVictory:number,
              public noOfDoubleGamesVictory:number) {
  }
}

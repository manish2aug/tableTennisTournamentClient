import {Score} from "./score";
export class DoubleGame {
  constructor(
              public firstPairFirstPlayerFullName:string,
              public firstPairFirstPlayerImageName:string,
              public firstPairSecondPlayerFullName:string,
              public firstPairSecondPlayerImageName:string,
              public secondPairFirstPlayerFullName:string,
              public secondPairFirstPlayerImageName:string,
              public secondPairSecondPlayerFullName:string,
              public secondPairSecondPlayerImageName:string,
              public firstPairTeamName:string,
              public secondPairTeamName:string,
              public scores:Score[],
              public winnerTeam:string,
              public eventDate:string) {
  }
}

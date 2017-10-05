import {Score} from "./score";
export class SingleGame {
  constructor(
              public firstPlayerFullName:string,
              public firstPlayerImageName:string,
              public firstPlayerTeamName:string,
              public secondPlayerFullName:string,
              public secondPlayerImageName:string,
              public winnerName:string,
              public eventDate:string,
              public winnerTeam:string,
              public scores:Score[]) {
  }
}

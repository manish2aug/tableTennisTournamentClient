import {Score} from "./score";
export class DoubleGameWriteRepresentation {
  constructor(public team1Player1Id:number,
              public team1Player2Id:number,
              public team2Player1Id:number,
              public team2Player2Id:number,
              public team1Points:number,
              public team2Points:number
  ) {
  }
}

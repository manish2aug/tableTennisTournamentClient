import {Score} from "./score";
export class SingleGameWriteRepresentation {
  constructor(public firstPlayerId:number,
              public secondPlayerId:number,
              public firstPlayerPoints:number,
              public secondPlayerPoints:number) {
  }
}

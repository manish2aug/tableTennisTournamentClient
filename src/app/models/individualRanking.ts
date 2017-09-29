import {Score} from "./score";
export class IndividualRanking {
  constructor(public name:string,
              public displayPoints:number,
              public victories,
              public wonAgainst:string[]) {
  }
}

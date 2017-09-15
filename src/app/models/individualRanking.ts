import {Score} from "./score";
export class IndividualRanking {
  constructor(public name:string,
              public points:number,
              public victories,
              public wonAgainst:string[]) {
  }
}

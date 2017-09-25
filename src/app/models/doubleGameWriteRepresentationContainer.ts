import {DoubleGameWriteRepresentation} from "./doubleGameWriteRepresentation";
export class DoubleGameWriteRepresentationContainer {
  constructor(public representations:DoubleGameWriteRepresentation[],
              public captainId:string) {
  }
}

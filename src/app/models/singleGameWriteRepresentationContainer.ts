import {SingleGameWriteRepresentation} from "./singleGameWriteRepresentation";
export class SingleGameWriteRepresentationContainer {
  constructor(public representations:SingleGameWriteRepresentation[],
              public captainId:string) {
  }
}

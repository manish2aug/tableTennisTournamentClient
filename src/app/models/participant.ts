export class Participant {
  constructor(public id:number,
              public teamId:string,
              public firstName:string,
              public lastName:string,
              public photoPath:string,
              public isCaptain:boolean,
              public teamName:string,
              public teamColor:string) {
  }
}

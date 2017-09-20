import {Component, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import {ParticipantService} from "../services/participantService";
import {Participant} from "../models/participant";
import {SingleGameWriteRepresentation} from "../models/singleGameWriteRepresentation";
import {SingleGameService} from "../services/singleGameService";
import {AuthService} from "../services/authService";
import {AuthResult} from "../models/authResult";
import {DoubleGameWriteRepresentation} from "../models/doubleGameWriteRepresentation";
import {DoubleGameService} from "../services/doubleGameService";

@Component({
  selector: 'score-recording',
  templateUrl: './score-recording.component.html',
  styles: [],
  providers: [ParticipantService, SingleGameService, DoubleGameService, AuthService]
})
export class ScoreRecordingComponent implements OnInit {

  firstPlayerInput:Participant[];
  secondPlayerInput:Participant[] = [];
  team1Player2Collection:Participant[] = [];
  team2Player1Collection:Participant[] = [];
  team2Player2Collection:Participant[] = [];
  selectedFirstPlayerId:number;
  selectedSecondPlayerId:number;
  selectedTeam1Player1Id:number;
  selectedTeam1Player2Id:number;
  selectedTeam2Player1Id:number;
  selectedTeam2Player2Id:number;
  hideAuth = false;
  hideScoringSheet = true;

  constructor(private participantService:ParticipantService,
              private singleGameService:SingleGameService,
              private doubleGameService:DoubleGameService,
              private authService:AuthService) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    console.log("getPlayers() invoked");
    return this.participantService.getAllParticipants().then(players => this.firstPlayerInput = players);
  }

  getPlayersOfOtherTeam(teamId):Promise<Participant[]> {
    console.log("getPlayersOfOtherTeam() invoked");
    // return this.participantService.getTeamsParticipantsOfOtherTeams(teamId).then(players => this.secondPlayerInput = players);
    return this.participantService.getTeamsParticipantsOfOtherTeams(teamId).then(players => players as Participant[]);
  }

  saveGamesToDatabase(games:SingleGameWriteRepresentation[]) {
    console.log("saveGamesToDatabase() invoked");
    return this.singleGameService.saveGames(games).then(response => {
      console.log(response);
    });
  }

  verifyCaptainId(captainId) {
    console.log("verifyCaptainId() invoked");
    return this.authService.verifyCaptainId(captainId).then(response => {
      console.log("response: ", response);
      // this.authResult = response;
      if (response !== null && response.valid) {
        this.hideAuth = true;
        this.hideScoringSheet = false;
      }
    });
  }

  onSubmit() {
    console.log("submitted");
    // this.hideAuth = true;
    // this.hideScoringSheet = false;
  }

  verifyCaptain(captainId) {
    console.log("manish: " + captainId);
    this.verifyCaptainId(captainId);
    // console.log("after service: ",this.authResult );
    // if (this.authResult !== null && this.authResult.valid) {
    //   this.hideAuth = true;
    //   this.hideScoringSheet = false;
    // }
  }

  saveGames(form:any) {

    console.log('you submitted value:', form["game1Player1Points"]);
    let gameCollection:SingleGameWriteRepresentation[] = [];

    if (form["game1Player1Points"] != "" && form["game1Player2Points"] != "") {
      gameCollection[0] = new SingleGameWriteRepresentation(this.selectedFirstPlayerId, this.selectedSecondPlayerId, form["game1Player1Points"], form["game1Player2Points"]);
    }
    if (form["game2Player1Points"] != "" && form["game2Player2Points"] != "") {
      gameCollection[1] = new SingleGameWriteRepresentation(this.selectedFirstPlayerId, this.selectedSecondPlayerId, form["game2Player1Points"], form["game2Player2Points"]);
    }
    if (form["game3Player1Points"] != "" && form["game3Player2Points"] != "") {
      gameCollection[2] = new SingleGameWriteRepresentation(this.selectedFirstPlayerId, this.selectedSecondPlayerId, form["game3Player1Points"], form["game3Player2Points"]);
    }
    if (form["game4Player1Points"] != "" && form["game4Player2Points"] != "") {
      gameCollection[3] = new SingleGameWriteRepresentation(this.selectedFirstPlayerId, this.selectedSecondPlayerId, form["game4Player1Points"], form["game4Player2Points"]);
    }
    if (form["game5Player1Points"] != "" && form["game5Player2Points"] != "") {
      gameCollection[4] = new SingleGameWriteRepresentation(this.selectedFirstPlayerId, this.selectedSecondPlayerId, form["game5Player1Points"], form["game5Player2Points"]);
    }
    this.saveGamesToDatabase(gameCollection);
  }

  saveDoubleGames(form:any) {

    console.log('you submitted value:', form);
    let gameCollection:DoubleGameWriteRepresentation[] = [];

    if (form["doubleGame1Player1Points"] != "" && form["doubleGame1Player2Points"] != "") {
      gameCollection[0] = new DoubleGameWriteRepresentation(this.selectedTeam1Player1Id, this.selectedTeam1Player2Id, this.selectedTeam2Player1Id, this.selectedTeam2Player2Id, form["doubleGame1Player1Points"], form["doubleGame1Player2Points"]);
    }
    if (form["doubleGame2Player1Points"] != "" && form["doubleGame2Player2Points"] != "") {
      gameCollection[1] = new DoubleGameWriteRepresentation(this.selectedTeam1Player1Id, this.selectedTeam1Player2Id, this.selectedTeam2Player1Id, this.selectedTeam2Player2Id, form["doubleGame2Player1Points"], form["doubleGame2Player2Points"]);
    }
    if (form["doubleGame3Player1Points"] != "" && form["doubleGame3Player2Points"] != "") {
      gameCollection[2] = new DoubleGameWriteRepresentation(this.selectedTeam1Player1Id, this.selectedTeam1Player2Id, this.selectedTeam2Player1Id, this.selectedTeam2Player2Id, form["doubleGame3Player1Points"], form["doubleGame2Player2Points"]);
    }
    if (form["doubleGame4Player1Points"] != "" && form["doubleGame4Player2Points"] != "") {
      gameCollection[3] = new DoubleGameWriteRepresentation(this.selectedTeam1Player1Id, this.selectedTeam1Player2Id, this.selectedTeam2Player1Id, this.selectedTeam2Player2Id, form["doubleGame4Player1Points"], form["doubleGame4Player2Points"]);
    }
    if (form["doubleGame5Player1Points"] != "" && form["doubleGame5Player2Points"] != "") {
      gameCollection[4] = new DoubleGameWriteRepresentation(this.selectedTeam1Player1Id, this.selectedTeam1Player2Id, this.selectedTeam2Player1Id, this.selectedTeam2Player2Id, form["doubleGame5Player1Points"], form["doubleGame5Player2Points"]);
    }
    this.saveDoublesGamesToDatabase(gameCollection);
  }

  saveDoublesGamesToDatabase(games:DoubleGameWriteRepresentation[]) {
    console.log("saveDoublesGamesToDatabase() invoked");
    return this.doubleGameService.saveGames(games).then(response => {
      console.log(response);
    });
  }

  onFirstPlayerChange(val) {
    let teamId;
    if (this.selectedFirstPlayerId != null) {
      for (var i = 0; i < this.firstPlayerInput.length; i++) {
        if (this.firstPlayerInput[i].id == this.selectedFirstPlayerId) {
          teamId = this.firstPlayerInput[i].teamId;
          this.getPlayersOfOtherTeam(teamId).then(response => this.secondPlayerInput = response);
        }
      }
    }
  }

  onFirstTeamPlayer1Change(val) {
    // set collection for team1Player2Collection
    // 1. retrieve all players from same team and remove the selected from first combo
    // 2. retrieve all players from other teams and set as team2Player1Collection
    console.log("onFirstTeamPlayer1Change() invoked");
    let teamId;
    if (this.selectedTeam1Player1Id != null) {
      // 1.
      for (var i = 0; i < this.firstPlayerInput.length; i++) {
        if (this.firstPlayerInput[i].id == this.selectedTeam1Player1Id) {
          teamId = this.firstPlayerInput[i].teamId;
          this.getPlayersOfSameTeamExceptSelf(teamId,this.selectedTeam1Player1Id);
        }
      }

      // 2.
      this.getPlayersOfOtherTeam(teamId).then(response => this.team2Player1Collection = response);
    }
  }

  getPlayersOfSameTeamExceptSelf(teamId, playerId) {
    console.log("getPlayersOfSameTeamExceptSelf() invoked");
    return this.participantService.getTeamsParticipants(teamId).then(players => {
      this.team1Player2Collection = players;
      for (var i = 0; i < this.team1Player2Collection.length; i++) {
        if (this.team1Player2Collection[i].id == playerId) {
          this.team1Player2Collection.splice(i, 1);
        }
      }
    });
  }

  getPlayersOfSameTeamExceptSelf2(teamId, playerId) {
    console.log("getPlayersOfSameTeamExceptSelf() invoked");
    return this.participantService.getTeamsParticipants(teamId).then(players => {
      this.team2Player2Collection = players;
      for (var i = 0; i < this.team1Player2Collection.length; i++) {
        if (this.team2Player2Collection[i].id == playerId) {
          this.team2Player2Collection.splice(i, 1);
        }
      }
    });
  }

  onSecondTeamPlayer1Change(val) {
    // set collection for team1Player2Collection
    // 1. retrieve all players from same team and remove the selected in first combo
    console.log("onSecondTeamPlayer1Change() invoked");
    let teamId;
    if (this.selectedTeam2Player1Id != null) {
      for (var i = 0; i < this.firstPlayerInput.length; i++) {
        if (this.firstPlayerInput[i].id == this.selectedTeam2Player1Id) {
          teamId = this.firstPlayerInput[i].teamId;
          this.getPlayersOfSameTeamExceptSelf2(teamId, this.selectedTeam2Player1Id);
        }
      }
    }
  }

}

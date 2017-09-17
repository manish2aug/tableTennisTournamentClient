import {Component, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import {ParticipantService} from "../services/participantService";
import {Participant} from "../models/participant";
import {SingleGameWriteRepresentation} from "../models/singleGameWriteRepresentation";
import {SingleGameService} from "../services/singleGameService";

@Component({
  selector: 'score-recording',
  templateUrl: './score-recording.component.html',
  styles: [],
  providers: [ParticipantService, SingleGameService]
})
export class ScoreRecordingComponent implements OnInit {

  firstPlayerInput:Participant[];
  secondPlayerInput:Participant[] = [];
  selectedFirstPlayerId:number;
  selectedSecondPlayerId:number;

  constructor(private paticipantService:ParticipantService, private singleGameService:SingleGameService) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    console.log("getPlayers() invoked");
    return this.paticipantService.getAllParticipants().then(players => this.firstPlayerInput = players);
  }

  getPlayersOfOtherTeam(teamId) {
    console.log("getPlayersOfOtherTeam() invoked");
    return this.paticipantService.getTeamsParticipantsOfOtherTeams(teamId).then(players => this.secondPlayerInput = players);
  }

  saveGamesToDatabase(games:SingleGameWriteRepresentation[]) {
    console.log("saveGamesToDatabase() invoked");
    return this.singleGameService.saveGames(games).then(response => {console.log(response);});
  }

  // submitted = false;
  // hideAuth = false;
  // hideScoringSheet = true;

  onSubmit() {
    console.log("submitted");
    // this.hideAuth = true;
    // this.hideScoringSheet = false;
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

  onFirstPlayerChange(val) {
    let teamId;
    if (this.selectedFirstPlayerId != null) {
      for (var i = 0; i < this.firstPlayerInput.length; i++) {
        if (this.firstPlayerInput[i].id == this.selectedFirstPlayerId) {
          teamId = this.firstPlayerInput[i].teamId;
          this.getPlayersOfOtherTeam(teamId);
        }
      }
    }
  }

}

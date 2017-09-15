import {Component, OnInit} from '@angular/core';
import {TeamService} from './services/teamService';
import {Team} from './models/team';
import {Participant} from "./models/participant";
import {ParticipantService} from "./services/participantService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService, ParticipantService]
})

export class AppComponent implements OnInit {

  teams:Team[];
  selectedTeam:Team;
  participants:Participant[] = [];

  constructor(private teamService:TeamService, private paticipantService:ParticipantService) {
  }

  getTeams() {
    console.log("getTeams() invoked");
    return this.teamService.getTeams().then(teams => this.teams = teams);
  }

  getTeamsParticipants(teamId) {
    console.log("getTeamsParticipants() invoked, input received: "+teamId);
    return this.paticipantService.getTeamsParticipants(teamId).then(participants => this.participants = participants);
  }

  ngOnInit():void {
    this.getTeams();
  }

  onSelect(teamId:number):void {
    console.log("onSelect() invoked, input received: " + teamId);
    this.getTeamsParticipants(teamId);
  }
}

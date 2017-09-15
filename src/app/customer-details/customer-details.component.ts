import {Component, OnInit, Input} from '@angular/core';

import {Customer} from '../models/customer';
import {TeamService} from '../services/teamService';

import {enableProdMode} from '@angular/core';
import {Participant} from "../models/participant";
import {ParticipantService} from "../services/participantService";
enableProdMode();

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [ParticipantService]
})
export class CustomerDetailsComponent {

  @Input() participants:Participant[];

  public getStyle(participant:Participant){
    if(participant.isCaptain){
      return "bold";
    }else{
      return "normal";
    }
  }

  public getImagePath(participant:Participant):string{
    var firstName = participant.firstName.toLocaleLowerCase();
    var lastName = participant.lastName.replace(/ /g,"").toLocaleLowerCase();
      return "assets/images/"+ firstName + "_"+ lastName+".JPG";
  }
}

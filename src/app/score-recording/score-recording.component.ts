import { Component, OnInit } from '@angular/core';
import {Hero} from "../models/hero";

@Component({
  selector: 'score-recording',
  templateUrl: './score-recording.component.html',
  styles: []
})
export class ScoreRecordingComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  hideAuth = false;
  hideScoringSheet = true;

  onSubmit() {
    console.log("submitted");
    // this.submitted = true;
    // verify the id and hide the section
    this.hideAuth = true;
    this.hideScoringSheet = false;
  }

  open() {
    console.log("submitGame1");
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

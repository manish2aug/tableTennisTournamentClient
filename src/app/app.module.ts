import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {SingleGameComponent} from "./singlematch-details/singlematch-details.component";
import {TeamRankingComponent} from "./team-rankings/team-rankings.component";
import {IndividualRankingComponent} from "./individual-rankings/individual-rankings.component";
import {ScoreRecordingComponent} from "./score-recording/score-recording.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    SingleGameComponent,
    TeamRankingComponent,
    IndividualRankingComponent,
    ScoreRecordingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

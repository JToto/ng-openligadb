import { Component } from '@angular/core';
import { OpenLigaDBService } from 'ng-openligadb';
import { FootballTableTeam } from 'ng-openligadb/lib/shared/footballTableTeam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private openLigaDB : OpenLigaDBService;

  table : FootballTableTeam[];

  public constructor(openLigaDB : OpenLigaDBService) {
      let that : AppComponent  = this;
      this.openLigaDB = openLigaDB;
      this.openLigaDB.setLeague("bl1");
      this.openLigaDB.setTimeout(10000);

      this.openLigaDB.getMatchData("2018", 31).then(function(result) {
        console.log("Match data for bl1, 2018, 31:", result);
      }); 

      this.openLigaDB.getLatestMatchData().then(function(result) {
        console.log("Latest match data for bl1:", result);
      });

      this.openLigaDB.getGroups("2018").then(function(result) {
        console.log("Match days for bl1, 2018:", result);
      });

      this.openLigaDB.getCurrentGroup().then(function(result) {
        console.log("Latest match day for bl1:", result);
      });

      this.openLigaDB.getSingleMatchData(39738).then(function(result) {
        console.log("Match with id 39738:", result);
      });

      this.openLigaDB.getLastChangeDate("2018", 32).then(function(result) {
        console.log("Last changed date for bl1, 2018, 32:", result);
      });

      this.openLigaDB.getTeams("2018").then(function(result) {
        console.log("Teams for bl1, 2018", result);
      }); 

      this.openLigaDB.getFootballTable("2018").then(function(result) {
        that.table = result;
        console.log("Table for bl1, 2018", result);
      });

      /* this.openLigaDB.getGoalGetters("2018").then(function(result) {
        console.log("Goal getters for bl1, 2018", result);
      }); */

      /* this.openLigaDB.getNextMatch(4276, 7).then(function(result) {
        console.log("Next match for Borussia Dortmund in bl1 (4276), 2018: ", result);
      }); */

      /* this.openLigaDB.getMatchDataForTeams(40, 7).then(function(result) {
        console.log("Match data for matches team 40 and team 7", result);
      }); */

      /* this.openLigaDB.getMatchDataForSeason("2018").then(function(result) {
        console.log(result);
      }); */
   }

}

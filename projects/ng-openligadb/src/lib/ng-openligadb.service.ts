import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatchDataMapper } from './utils/matchDataMapper'
import { MatchData } from './shared/matchData';
import { Group } from './shared/group';
import { Team } from "./shared/team";
import { LeagueNotSet } from './error/LeagueNotSet';

import { GoalGetter } from './shared/goalGetter';
import { FootballTableTeam } from './shared/footballTableTeam';

@Injectable({
  providedIn: 'root'
})
export class OpenLigaDBService {

  static readonly OPENLIGADB_URL: string = "https://www.openligadb.de";

  private league: string;

  constructor(private http: HttpClient) { }

  static test() { }

  /**
   * Sets the league context.
   * @param league league shortcut (e.g.: bl1, bl2 ...)
   */
  setLeague(league: string): void {
    this.league = league;
  }

  /**
   * Returns match data for the latest match day (groupOrderId) of the league.
   */
  getLatestMatchData(): Promise<MatchData[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getmatchdata/" +
          this.league).subscribe(data => {
            resolve(MatchDataMapper.jsonArrayToMatchData(data as Array<any>));
          }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns complete match data for every match day of the league.
   * @param season season shortcut (e.g: 2019)
   */
  getMatchDataForSeason(season: string): Promise<MatchData[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getmatchdata/" +
          this.league + "/" + season).subscribe(data => {
            resolve(MatchDataMapper.jsonArrayToMatchData(data as Array<any>));
          }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns match data for a specific match day of a specific season of the league.
   * @param season season shortcut (e.g: 2019)
   * @param groupOrderId groupOrderId/match day (e.g.: 34)
   */
  getMatchData(season: string, groupOrderId: number): Promise<MatchData[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getmatchdata/" +
          this.league + "/" + season + "/" + groupOrderId).subscribe(data => {

            resolve(MatchDataMapper.jsonArrayToMatchData(data as Array<any>));
          }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns the results of a single map.
   * @param id id of the game
   */
  getSingleMatchData(id: number): Promise<MatchData> {
    return new Promise((resolve, reject) => {
      this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getmatchdata/" + id).subscribe(data => {
        resolve(MatchDataMapper.jsonToMatchData(data as Array<any>));
      }, error => reject(error));
    });
  }

  /**
   * Returns the current group (match day) for the league.
   */
  getCurrentGroup(): Promise<Group> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getcurrentgroup/" + this.league).subscribe(data => {
          resolve(MatchDataMapper.jsonToGroup(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns all groups (match days) for a season of the league.
   * @param season season shortcut (e.g: 2019)
   */
  getGroups(season: string): Promise<Group[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getavailablegroups/" + this.league + "/" + season).subscribe(data => {
          resolve(MatchDataMapper.jsonArrayToGroups(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Gets the date of the latest change of the group/match day.
   * This is used to avoid unnecessary polls of the other services.
   * @param season season shortcut (e.g: 2019)
   * @param groupOrderId groupOrderId/match day (e.g.: 34)
   */
  getLastChangeDate(season: string, groupOrderId: number): Promise<Date> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getlastchangedate/" + this.league + "/" + season + "/" + groupOrderId).subscribe(data => {
          resolve(new Date(data as string));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns the next match for a team in the league.
   * @param leagueId id of the league (not the shortcut!)
   * @param teamId id of the team
   */
  getNextMatch(leagueId : number, teamId: number): Promise<MatchData> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getnextmatchbyleagueteam/" + leagueId + "/" + teamId).subscribe(data => {
          resolve(MatchDataMapper.jsonToMatchData(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns the teams for a season of the league.
   * @param season season shortcut (e.g: 2019)
   */
  getTeams(season: string): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getavailableteams/" + this.league + "/" + season).subscribe(data => {
          resolve(MatchDataMapper.jsonArrayToTeams(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Returns match data for all matches done by two teams.
   * @param team1Id id of team 1
   * @param team2Id id of team 2
   */
  getMatchDataForTeams(team1Id: number, team2Id): Promise<MatchData[]> {
    return new Promise((resolve, reject) => {
      try {
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getmatchdata/" + team1Id + "/" + team2Id).subscribe(data => {
          resolve(MatchDataMapper.jsonArrayToMatchData(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Gets all goal getters for a season of the league.
   * @param season season shortcut (e.g: 2019)
   */
  getGoalGetters(season: string): Promise<GoalGetter[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getgoalgetters/" + this.league + "/" + season).subscribe(data => {
          resolve(MatchDataMapper.jsonArrayToGoalGetters(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }

  /**
   * Gets the football/soccer table for a season of the league.
   * @param season season shortcut (e.g: 2019)
   */
  getFootballTable(season: string): Promise<FootballTableTeam[]> {
    return new Promise((resolve, reject) => {
      try {
        this.checkLeague();
        this.http.get(OpenLigaDBService.OPENLIGADB_URL + "/api/getbltable/" + this.league + "/" + season).subscribe(data => {
          resolve(MatchDataMapper.jsonArrayToFootballTableTeams(data as Array<any>));
        }, error => reject(error));
      } catch (ex) {
        reject(ex);
      }
    });
  }



  private checkLeague(): void {
    if (!this.league) {
      throw new LeagueNotSet();
    }
  }

}

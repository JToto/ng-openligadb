import { Goal } from "./goal"
import { Team } from './team';
import { MatchResult } from './matchResult';
import { Group } from './group';
import { Location } from './location';

export class MatchData {
    private _leagueName: string;
    private _leagueId: number;
    private _matchDateTime: string;
    private _matchDateTimeUTC: string;
    private _matchId: number;
    private _matchIsFinished: boolean;
    private _numberOfViewers: number;
    private _timeZoneId: string;
    private _lastUpdateDateTime: string;
    private _goals: Goal[];
    private _team1: Team;
    private _team2: Team;
    private _matchResults: MatchResult[];
    private _group: Group;
    private _location: Location;

    public get location(): Location {
        return this._location;
    }
    public set location(value: Location) {
        this._location = value;
    }

    public get group(): Group {
        return this._group;
    }
    public set group(value: Group) {
        this._group = value;
    }

    public get matchResults(): MatchResult[] {
        return this._matchResults;
    }
    public set matchResults(value: MatchResult[]) {
        this._matchResults = value;
    }

    public get team2(): Team {
        return this._team2;
    }
    public set team2(value: Team) {
        this._team2 = value;
    }

    public get team1(): Team {
        return this._team1;
    }
    public set team1(value: Team) {
        this._team1 = value;
    }

    public get goals(): Goal[] {
        return this._goals;
    }
    public set goals(value: Goal[]) {
        this._goals = value;
    }

    public getMatchDate() : Date {
        return new Date(this._matchDateTimeUTC);
    }

    public get timeZoneId(): string {
        return this._timeZoneId;
    }

    public set timeZoneId(value: string) {
        this._timeZoneId = value;
    }

    public get numberOfViewers(): number {
        return this._numberOfViewers;
    }

    public set numberOfViewers(value: number) {
        this._numberOfViewers = value;
    }

    public get matchIsFinished(): boolean {
        return this._matchIsFinished;
    }
    public set matchIsFinished(value: boolean) {
        this._matchIsFinished = value;
    }

    public get matchId(): number {
        return this._matchId;
    }

    public set matchId(value: number) {
        this._matchId = value;
    }

    public get matchDateTimeUTC(): string {
        return this._matchDateTimeUTC;
    }

    public set matchDateTimeUTC(value: string) {
        this._matchDateTimeUTC = value;
    }

    public get matchDateTime(): string {
        return this._matchDateTime;
    }

    public set matchDateTime(value: string) {
        this._matchDateTime = value;
    }

    public get leagueId(): number {
        return this._leagueId;
    }

    public set leagueId(value: number) {
        this._leagueId = value;
    }

    public get lastUpdateDateTime(): string {
        return this._lastUpdateDateTime;
    }

    public set lastUpdateDateTime(value: string) {
        this._lastUpdateDateTime = value;
    }

    public get leagueName(): string {
        return this._leagueName;
    }

    public set leagueName(value: string) {
        this._leagueName = value;
    }

    private compareMatchResults(a : MatchResult, b : MatchResult) {
        if ( a.resultOrderId < b.resultOrderId ){
          return -1;
        }
        if ( a.resultOrderId > b.resultOrderId ){
          return 1;
        }
        return 0;
    }

    public getOrderedMatchResults() {
        return this.matchResults.sort(this.compareMatchResults);
    }

}
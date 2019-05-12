import {MatchData} from '../shared/matchData';
import { Goal } from '../shared/goal';
import { Team } from '../shared/team';
import { MatchResult } from '../shared/matchResult';
import { Location } from "../shared/location"
import { Group } from '../shared/group';
import { GoalGetter } from '../shared/goalGetter';
import { FootballTableTeam } from '../shared/footballTableTeam';

export class MatchDataMapper {

    static jsonArrayToMatchData(json : Array<any>) : MatchData[] {
        let matchData : MatchData[] = [];
        for (let i : number = 0; i < json.length; i++) {
            let match : MatchData = MatchDataMapper.jsonToMatchData(json[i]);
            matchData.push(match);
        }
        return matchData;
    }

    static jsonArrayToGroups(json : Array<any>) : Group[] {
        let groups : Group[] = [];
        for (let i : number = 0; i < json.length; i++) {
            let group : Group = MatchDataMapper.jsonToGroup(json[i]);
            groups.push(group);
        }
        return groups;
    }

    static jsonArrayToTeams(json : Array<any>) : Team[] {
        let teams : Team[] = [];
        for (let i : number = 0; i < json.length; i++) {
            let team : Team = MatchDataMapper.jsonToTeam(json[i]);
            teams.push(team);
        }
        return teams;
    }

    static jsonArrayToFootballTableTeams(json : Array<any>) : FootballTableTeam[] {
        let teams : FootballTableTeam[] = [];
        for (let i : number = 0; i < json.length; i++) {
            let team : FootballTableTeam = MatchDataMapper.jsonToFootballTableTeam(json[i]);
            teams.push(team);
        }
        return teams;
    }

    static jsonArrayToGoalGetters(json : Array<any>) : GoalGetter[] {
        let goalGetters : GoalGetter[] = [];
        for (let i : number = 0; i < json.length; i++) {
            let goalGetter : GoalGetter = MatchDataMapper.jsonToGoalGetter(json[i]);
            goalGetters.push(goalGetter);
        }
        return goalGetters;
    }

    static jsonToMatchData(match : any) : MatchData {
        let matchData : MatchData = new MatchData();
        matchData.leagueId = match.LeagueId;
        matchData.leagueName = match.LeagueName;
        matchData.matchDateTime = match.MatchDateTime;
        matchData.matchDateTimeUTC = match.MatchDateTimeUTC;
        matchData.matchId = match.MatchID;
        matchData.matchIsFinished = match.MatchIsFinished;
        matchData.numberOfViewers = match.NumberOfViewers;
        matchData.timeZoneId = match.TimeZoneID;

        if (match.Location) {
            matchData.location = this.jsonToLocation(match.Location);
        }
        
        matchData.group = this.jsonToGroup(match.Group);

        /* parse goals */
        matchData.goals = [];
        for (let j : number = 0; j < match.Goals.length; j++) {
            let goal : Goal = MatchDataMapper.jsonToGoal(match.Goals[j]);
            matchData.goals.push(goal);
        }

        /* parse teams */
        matchData.team1 = MatchDataMapper.jsonToTeam(match.Team1);
        matchData.team2 = MatchDataMapper.jsonToTeam(match.Team2);

        /* parse result data */
        matchData.matchResults = [];
        for (let j : number = 0; j < match.MatchResults.length; j++) {
            let matchResult : MatchResult = MatchDataMapper.jsonToMatchResult(match.MatchResults[j]);
            matchData.matchResults.push(matchResult);
        }

        return matchData;
    }

    static jsonToFootballTableTeam(json : any) : FootballTableTeam {
        let team : FootballTableTeam = new FootballTableTeam();
        team.draw = json.Draw;
        team.won = json.Won;
        team.lost = json.Lost;
        team.goals = json.Goals;
        team.opponentGoals = json.OpponentGoals;
        team.points = json.Points;
        team.shortName = json.ShortName;
        team.teamIconUrl = json.TeamIconUrl;
        team.teamInfoId = json.TeamInfoId;
        team.teamName = json.TeamName;
        team.matches = json.Matches;
        return team;
    }

    static jsonToTeam(json : any) : Team {
        let team : Team = new Team();
        team.shortName = json.ShortName;
        team.teamGroupName = json.TeamGroupName;
        team.teamIconUrl = json.TeamIconUrl;
        team.teamId = json.TeamId;
        team.teamName = json.TeamName;
        return team;
    }

    static jsonToGoal(json : any) : Goal {
        let goal : Goal = new Goal();
        goal.comment = json.Comment;
        goal.goalGetterId = json.GoalGetterID;
        goal.goalGetterName = json.GoalGetterName;
        goal.goalId = json.GoalID;
        goal.isOvertime = json.IsOvertime;
        goal.isPenalty = json.IsPenalty;
        goal.isOwnGoal = json.IsOwnGoal;
        goal.matchMinute = json.MatchMinute;
        goal.scoreTeam1 = json.ScoreTeam1;
        goal.scoreTeam2 = json.ScoreTeam2;

        return goal;
    }

    static jsonToMatchResult(json : any) : MatchResult {
        let matchResult : MatchResult = new MatchResult();
        matchResult.pointsTeam1 = json.PointsTeam1;
        matchResult.pointsTeam2 = json.PointsTeam2;
        matchResult.resultDescription = json.ResultDescription;
        matchResult.resultId = json.ResultID;
        matchResult.resultName = json.ResultName;
        matchResult.resultOrderId = json.ResultOrderID;
        matchResult.resultTypeId = json.ResultTypeID;
        return matchResult;
    }

    static jsonToGoalGetter(json : any) : GoalGetter {
        let goalGetter : GoalGetter = new GoalGetter();
        goalGetter.goalCount = json.GoalCount;
        goalGetter.goalGetterId = json.GoalGetterId;
        goalGetter.goalGetterName = json.GoalGetterName;
        return goalGetter;
    }

    static jsonToLocation(json : any) : Location {
        let location : Location = new Location();
        location.locationCity = json.LocationCity;
        location.locationId = json.LocationID;
        location.locationStadium = json.LocationStadium;
        return location;
    }

    static jsonToGroup(json : any) : Group {
        let group : Group = new Group();
        group.groupId = json.GroupID;
        group.groupName = json.GroupName;
        group.groupOrderId = json.GroupOrderID;
        return group;
    }
} 
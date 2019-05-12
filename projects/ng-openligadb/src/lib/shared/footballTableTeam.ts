export class FootballTableTeam {
    private _draw: number;

    private _goals: number;
    
    private _lost: number;
    
    private _won: number;
    
    private _opponentGoals: number;
    
    private _points: number;
    
    private _shortName: string;
    
    private _teamIconUrl: string;
    
    private _teamInfoId: number;

    private _teamName: string;

    private _matches: number;
    
    public get matches(): number {
        return this._matches;
    }
    public set matches(value: number) {
        this._matches = value;
    }

    public get teamName(): string {
        return this._teamName;
    }
    public set teamName(value: string) {
        this._teamName = value;
    }

    public get draw(): number {
        return this._draw;
    }
    public set draw(value: number) {
        this._draw = value;
    }
    public get goals(): number {
        return this._goals;
    }
    public set goals(value: number) {
        this._goals = value;
    }
    public get lost(): number {
        return this._lost;
    }
    public set lost(value: number) {
        this._lost = value;
    }
    public get won(): number {
        return this._won;
    }
    public set won(value: number) {
        this._won = value;
    }
    public get opponentGoals(): number {
        return this._opponentGoals;
    }
    public set opponentGoals(value: number) {
        this._opponentGoals = value;
    }
    public get points(): number {
        return this._points;
    }
    public set points(value: number) {
        this._points = value;
    }
    public get shortName(): string {
        return this._shortName;
    }
    public set shortName(value: string) {
        this._shortName = value;
    }
    public get teamIconUrl(): string {
        return this._teamIconUrl;
    }
    public set teamIconUrl(value: string) {
        this._teamIconUrl = value;
    }
    public get teamInfoId(): number {
        return this._teamInfoId;
    }
    public set teamInfoId(value: number) {
        this._teamInfoId = value;
    }
}
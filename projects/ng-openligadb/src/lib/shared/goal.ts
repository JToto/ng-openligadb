export class Goal {
    private _goalGetterId: number;
    
    private _goalGetterName: string;
    
    private _goalId: number;
    
    private _isOvertime: boolean;
   
    private _isOwnGoal: boolean;
 
    private _isPenalty: boolean;
    
    private _matchMinute: number;
   
    private _scoreTeam1: number;
   
    private _scoreTeam2: number;

    private _comment: string;

    public get goalGetterId(): number {
        return this._goalGetterId;
    }
    public set goalGetterId(value: number) {
        this._goalGetterId = value;
    }

    public get goalGetterName(): string {
        return this._goalGetterName;
    }
    public set goalGetterName(value: string) {
        this._goalGetterName = value;
    }

    public get goalId(): number {
        return this._goalId;
    }
    public set goalId(value: number) {
        this._goalId = value;
    }

    public get isOvertime(): boolean {
        return this._isOvertime;
    }
    public set isOvertime(value: boolean) {
        this._isOvertime = value;
    }

    public get isOwnGoal(): boolean {
        return this._isOwnGoal;
    }
    public set isOwnGoal(value: boolean) {
        this._isOwnGoal = value;
    }

    public get isPenalty(): boolean {
        return this._isPenalty;
    }
    public set isPenalty(value: boolean) {
        this._isPenalty = value;
    }

    public get matchMinute(): number {
        return this._matchMinute;
    }
    public set matchMinute(value: number) {
        this._matchMinute = value;
    }

    public get scoreTeam1(): number {
        return this._scoreTeam1;
    }
    public set scoreTeam1(value: number) {
        this._scoreTeam1 = value;
    }

    public get scoreTeam2(): number {
        return this._scoreTeam2;
    }
    public set scoreTeam2(value: number) {
        this._scoreTeam2 = value;
    }

    public get comment(): string {
        return this._comment;
    }
    public set comment(value: string) {
        this._comment = value;
    }
}
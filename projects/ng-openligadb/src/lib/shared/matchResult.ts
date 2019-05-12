export class MatchResult {
    private _pointsTeam1: number;
    
    private _pointsTeam2: number;
    
    private _resultDescription: string;
    
    private _resultId: number;
    
    private _resultName: string;
   
    private _resultOrderId: number;
    
    private _resultTypeId: number;
    
    public get pointsTeam1(): number {
        return this._pointsTeam1;
    }
    public set pointsTeam1(value: number) {
        this._pointsTeam1 = value;
    }

    public get pointsTeam2(): number {
        return this._pointsTeam2;
    }
    public set pointsTeam2(value: number) {
        this._pointsTeam2 = value;
    }

    public get resultDescription(): string {
        return this._resultDescription;
    }
    public set resultDescription(value: string) {
        this._resultDescription = value;
    }

    public get resultId(): number {
        return this._resultId;
    }
    public set resultId(value: number) {
        this._resultId = value;
    }

    public get resultName(): string {
        return this._resultName;
    }
    public set resultName(value: string) {
        this._resultName = value;
    }

    public get resultOrderId(): number {
        return this._resultOrderId;
    }
    public set resultOrderId(value: number) {
        this._resultOrderId = value;
    }

    public get resultTypeId(): number {
        return this._resultTypeId;
    }
    public set resultTypeId(value: number) {
        this._resultTypeId = value;
    }

}
export class Team {
    private _shortName: string;

    private _teamGroupName: string;
    
    private _teamIconUrl: string;
    
    private _teamId: number;
   
    private _teamName: string;

    public get teamId(): number {
        return this._teamId;
    }
    public set teamId(value: number) {
        this._teamId = value;
    }

    public get teamName(): string {
        return this._teamName;
    }
    public set teamName(value: string) {
        this._teamName = value;
    }

    public get teamIconUrl(): string {
        return this._teamIconUrl;
    }
    public set teamIconUrl(value: string) {
        this._teamIconUrl = value;
    }

    public get teamGroupName(): string {
        return this._teamGroupName;
    }
    public set teamGroupName(value: string) {
        this._teamGroupName = value;
    }

    public get shortName(): string {
        return this._shortName;
    }
    public set shortName(value: string) {
        this._shortName = value;
    }
}
export class Location {
    
    private _locationCity: string;
    
    private _locationId: number;
    
    private _locationStadium: string;


    public get locationStadium(): string {
        return this._locationStadium;
    }
    public set locationStadium(value: string) {
        this._locationStadium = value;
    }

    public get locationId(): number {
        return this._locationId;
    }
    public set locationId(value: number) {
        this._locationId = value;
    }

    public get locationCity(): string {
        return this._locationCity;
    }
    public set locationCity(value: string) {
        this._locationCity = value;
    }
}
export class GoalGetter {
    private _goalCount: number;
    private _goalGetterId: number;
    private _goalGetterName: string;

    public get goalGetterName(): string {
        return this._goalGetterName;
    }
    public set goalGetterName(value: string) {
        this._goalGetterName = value;
    }

    public get goalCount(): number {
        return this._goalCount;
    }
    public set goalCount(value: number) {
        this._goalCount = value;
    }

    public get goalGetterId(): number {
        return this._goalGetterId;
    }
    public set goalGetterId(value: number) {
        this._goalGetterId = value;
    }
}
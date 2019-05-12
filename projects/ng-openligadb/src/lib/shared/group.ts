export class Group {
    private _groupId: number;
    
    private _groupName: string;
    
    private _groupOrderId: number;

    public get groupOrderId(): number {
        return this._groupOrderId;
    }
    public set groupOrderId(value: number) {
        this._groupOrderId = value;
    }

    public get groupName(): string {
        return this._groupName;
    }
    public set groupName(value: string) {
        this._groupName = value;
    }

    public get groupId(): number {
        return this._groupId;
    }
    public set groupId(value: number) {
        this._groupId = value;
    }
}
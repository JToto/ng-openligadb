export class LeagueNotSet extends Error {
    constructor(message?: string) {
        super("League has not been set"); 
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
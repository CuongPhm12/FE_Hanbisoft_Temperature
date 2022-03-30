export class Temperature {

    private _id: number;
    private _temperature: number;
    private _datetime: Date;
    private _user: any

    constructor(id: number, temperature: number, datetime: Date, user: any) {
        this._id = id;
        this._temperature = temperature;
        this._datetime = datetime;
        this._user = user;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get temperature(): number {
        return this._temperature;
    }

    set temperature(value: number) {
        this._temperature = value;
    }

    get date(): Date {
        return this._datetime;
    }

    set date(value: Date) {
        this._datetime = value;
    }

    get user(): any {
        return this._user;
    }

    set user(value: any) {
        this._user = value;
    }
}


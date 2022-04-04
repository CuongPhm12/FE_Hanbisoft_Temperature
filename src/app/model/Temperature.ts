export class Temperature {

    private _id: number;
    private _temperature: number;
    private _datetime: Date;
    private _user: any
    private _status: boolean


    constructor(temperature: number, datetime: Date, status: boolean) {
        // this._id = id;
        this._temperature = temperature;
        this._datetime = datetime;
        // this._user = user;
        this._status = status;
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

    get user(): any {
        return this._user;
    }

    set user(value: any) {
        this._user = value;
    }

    get datetime(): Date {
        return this._datetime;
    }

    set datetime(value: Date) {
        this._datetime = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}


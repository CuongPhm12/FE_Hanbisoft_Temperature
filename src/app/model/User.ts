export class User{
    private _id : number;
   private _name: string;
   private _username : string;
    private _email : string;
    private _password : string;
    private _position : string;
    private _status:  string;
    private _roles : string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get roles(): string {
        return this._roles;
    }

    set roles(value: string) {
        this._roles = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}

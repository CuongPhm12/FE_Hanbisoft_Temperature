export class SignUpForm{
    name: string;
    username: string;
    email: string;
    password: string;
    position: string;
    temperature: number;
    status: boolean;
    roles: string[];

    constructor(name: string, username: string, email: string, password: string, position: string, temperature: number, status: boolean,) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.position = position;
        this.temperature = temperature;
        this.status = status;
        this.roles = ['admin'];
    }
}

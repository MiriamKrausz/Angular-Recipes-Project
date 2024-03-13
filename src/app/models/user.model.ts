
export class User {
    static nextCode: number = 0;
    code: number;
    name!: string;
    address!: string;
    email!: string;
    password!: string;

    constructor(name: string, address: string, email: string, password: string) {
        this.code = User.nextCode;
        User.nextCode++;
        this.name = name;
        this.address = address;
        this.email = email;
        this.password = password;
    }
}

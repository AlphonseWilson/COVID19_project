export class User {
    id:Number;
    username:string;
    password:string;
    active:boolean;

    constructor(id:Number, username:string, password:string, active:boolean){
        this.id = id;
        this.username = username;
        this.password = password;
        this.active = active;
    }
}

import internal from "stream";
import fs from 'fs';
import { json } from "stream/consumers";

export class Login {
    login: string;
    password: string;

    constructor(login: string = "", password: string = ""){
        this.login = login;
        this.password = password;
        console.log("Login created");
    }
}
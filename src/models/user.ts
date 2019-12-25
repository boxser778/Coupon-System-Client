import { ClientType } from './clientType.enum';

export class User{
    constructor(public username?:string,public password?:string,public clientType?:ClientType){

    }
}
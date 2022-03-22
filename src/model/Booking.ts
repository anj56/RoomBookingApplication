import { Room } from "./Room";
import { User } from "./User";

export class Booking{
    constructor(public id:number,public room:Room,public user:User,public purpose:string="",public participants:number){

    }
}
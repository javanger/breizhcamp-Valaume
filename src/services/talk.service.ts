import * as $ from "jquery";
import  Session from "../domains/session";

const promiseConf$ =  $.get("https://www.breizhcamp.org/json/talks.json");
const promiseKeyNote$ = $.get("http://www.breizhcamp.org/json/others.json");

export class TalkService {

    constructor(){}

    findAllSessions():Promise<Session[]>{

       return Promise.all([promiseConf$, promiseKeyNote$])
            .then((result:any[]) => {
                return result[0].concat(result[1]).map((d:any) => new Session(d.name, d.event_type, d.format,d.venue, d.speakers,d.description));
            });
        }
}
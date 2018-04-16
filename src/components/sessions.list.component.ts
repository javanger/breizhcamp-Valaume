import Component from "./component";
import {TalkService} from "../services/talk.service";
import  Session from "../domains/session";

const talk = new TalkService();
let names:string = "";

export class SessionsListComponent implements Component{


    sessions:Promise<Session[]> = talk.findAllSessions();
    constructor(){ }
    
    render(selector:string){
        this.sessions.then(session =>{ session.forEach( s =>names = names.concat("<div class=\"session\">"+ s.name +"</div>"))        
                window.document.querySelector(selector).innerHTML = names;      
        })             
              
    }             
}

//ts.findAllSessions().then(data => console.log('data', data));
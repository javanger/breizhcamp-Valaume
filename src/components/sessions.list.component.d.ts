import Component from "./component";
import Session from "../domains/session";
export declare class SessionsListComponent implements Component {
    sessions: Promise<Session[]>;
    constructor();
    render(selector: string): void;
}

import Session from "../domains/session";
export declare class TalkService {
    constructor();
    findAllSessions(): Promise<Session[]>;
}

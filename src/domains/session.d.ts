export default class Session {
    name: string;
    eventType: string;
    format: string;
    venue: string;
    speakers: string[];
    description: string;
    constructor(name: string, eventType: string, format: string, venue: string, speakers: string[], description: string);
}

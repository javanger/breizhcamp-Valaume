import {LayoutComponent} from "./components/layout.component";
import {SessionsListComponent} from "./components/sessions.list.component";


export default class Main {
    constructor() {
    }

    start() {
        const layout = new LayoutComponent();
        layout.render();
    }
    afficherSession() {
        const sessionList = new SessionsListComponent();
        sessionList.render("#main-view");
    }    
}

let main = new Main();
main.start();
main.afficherSession();
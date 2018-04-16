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

var router = () => {
    if (location.hash == '#speakers-list') {
        // TODO afficher vue liste des présentateurs
    } else if (location.hash == '#sessions-list') {
       main.afficherSession();
    } else {
        // TODO afficher vue par défaut
    }
}

window.addEventListener('load', () => {

    window.onhashchange = () => {
        router();
    };

    router();
});
import {LayoutComponent} from "./components/layout.component";




export default class Main {
    constructor() {
    }

    start() {
        const layout = new LayoutComponent();
        layout.render();
    }

    
}

let main = new Main();
main.start();
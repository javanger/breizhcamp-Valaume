import * as $ from "jquery";

const promiseConf$ =  $.get("https://www.breizhcamp.org/json/talks.json");
const promiseKeyNote$ = $.get("http://www.breizhcamp.org/json/others.json");

let sessions : Session[];

promiseConf$.then(data =>
    sessions.concat(data)
);
promiseKeyNote$.then(data =>
    sessions.concat(data)
);
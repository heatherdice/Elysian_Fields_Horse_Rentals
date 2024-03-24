import { initDataStorage } from "./storage.js";

if (initDataStorage()) 
  console.log("Data Storage Initialized Successfully.")

import * as http from "http";
import {getter, poster} from "./httpListener.js";

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  switch(req.method){
    case "GET": {console.log("invoking getter"); getter(req, res); break;}
    case "POST": {poster(req, res); break;}
    default: {res.end(JSON.stringify({missing: "data"}));}
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
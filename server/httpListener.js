/**This module handles all processing of HTTP requests.  The sole
 * purpose of this module is to compartmentalize the nested logic
 * of request handling away from {@link index.js} for cleanliness.
 * 
 * Exports of this module serve as entry points that {@link index.js}
 * can invoke.  This module is also the primary consumer of exports
 * from {@link storage.js}. 
 */

import * as url from "url";
import * as db from "./storage.js";

/**Handles all requests under the assumption {@link ClientRequest#method}
 * is equal to "GET".  
 */
export function getter(req, res) {
    let parsedURL = url.parse(req.url, true);
    //Always return data in JSON form
    res.setHeader('Content-Type', 'application/json')
    //execute based on the path of the request
    switch (parsedURL.path) {
        case "/test/info": {end(res, db.getInfo()); break;} 
        case "/test/horses": {end(res, db.getHorses(false)); break;}
        case "/test/testimonials": {}
        default: {res.end();}
    }
}

/**Handles all requests under the assumption {@link ClientRequest#method}
 * is equal to "POST".  
 */
export function poster(req, res) {
    //TODO
}

/**An Internal utility function to complete a {@link ClientResponse} with
 * a string representation of the data passed in.  This method assumes the 
 * data being passed in is a JS Object, which is consistent with most of
 * the design of this applciation.
 */
function end(res, data) {
    res.end(JSON.stringify(data));
}

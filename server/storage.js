/**This module handles all interaction between the sources of information.
 * Exports to this module are designed to provide a safe interaction with
 * the information and to centralize the core I/O logic. 
 */

import { readFileSync } from 'fs';
import companyBio from './config.json' with {type: "json"};
import verbose from 'sqlite3';

//Upon loading the module, instantiate the database handler
const db = new verbose.Database(`./server/data.db`, err => {
  err == null 
    ? console.log("Database Loaded Successfully")
    : console.log(`Database Failed to Load.  ERROR: ${err}`);
});

/**generate the database and tables if absent.
 * @returns {Boolean} true if all setup steps were successful
*/
export function initDataStorage() {
  let initializationStatus = true;

  //read and execute the table definition file to create, if absent, the necessary tables and relations.  
  let fileContents = readFileSync('./server/tables.sql', {encoding: "utf-8"});
  db.exec(fileContents, err => {
    if (err) {
      console.log(`Table Creation Unsuccesful. ERROR: ${err}`);
      initializationStatus = false;
    }
  });
  //print the company bio to the console to confirm proper load of the configuration
  console.log("%j", companyBio);
  //let the method invoker know whether all data loaded successfully.
  return initializationStatus;
}

/**@returns the JSON object containing the company members and bio. */
export function getInfo() {return companyBio;}

/**Queries the database for testimonials
 * @param {boolean} activeOnly Should the query only return "active" testimonials
 * @returns an array of testimonials
 */
export function getTestimonials(activeOnly) {
  //TODO
}

/**Queries the database for horse information based on provided query parameters.
 * This is an internal function and should not be called outside the module.
 * 
 * @param {boolean} activeOnly Should the query return only "active" horse info
 * @param {Array} horses An array to put the results into
 */
function getHorsesInternal(activeOnly, horses) {
  db.each(`SELECT * FROM HorseInfo ${activeOnly ? "WHERE active = true" : ""}`, (err, row) => {
    if (err) console.log(err);
    else horses.push(row);
  });
}

/**An Asynchronous getter for horse information for use by {@link httpListener.js} 
 * 
 * @param {boolean} activeOnly Should the query return only "active" horse info
 * @returns {Array} An array of horse information JSON objects.
*/
export async function getHorses(activeOnly) {
  let horses = [];
  await getHorsesInternal(activeOnly, horses);
  return horses;
}
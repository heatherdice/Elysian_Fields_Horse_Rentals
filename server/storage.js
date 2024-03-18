import { readFile } from 'fs';
import verbose from 'sqlite3';

const db = new verbose.Database(`./server/data.db`, err => {
  err == null 
    ? console.log("Database Loaded Successfully")
    : console.log(`Database Failed to Load.  ERROR: ${err}`);
});

var companyBio = {};

/**Look for an existing config.json file and generate the database
 * tables if absent.
 * @returns {Boolean} true if all setup steps were successful
*/
export function initDataStorage() {
  let initializationStatus = true;
  let fileContents = "";

  //read the config file.  
  readFile('./server/config.json', (err, data) => {
    if (err == null)
      companyBio = data.toJSON()
    else {
      console.log(err)
      initializationStatus = false;
    }
  });

  //run table definition file to create, if absent, the necessary tables and relations.  
  readFile('./server/tables.sql', (err, data) => {
    if (err == null)
      fileContents = data.toString()
    else {
      console.log(err);
      initializationStatus = false;
    }
  });
  db.exec(fileContents, err => {
    console.log(`Table Creation Unsuccesful. ERROR: ${err}`);
    initializationStatus = false;
  });

  return initializationStatus;
}
/**A default value for config.json */
export let companyBio = {
    members: [{membername: "Jane Doe", photo: `./photos/${membername}.jpg`, bio:"Lorem Ipsum Dolor"}],
    companyName:"Elysian Fields",
    companyBio: "Lorem Ipsum Dolor",
    companyPhoto: `/photos/company.jpg`
  }

  /**Looks for an existing config.json file and the sqlite DB.
   * If either cannot be found, a new file is created.  This
   * method is invoked during server startup.
  */
  export function initDataStorage() {
    //TODO
    /* 1. get config.json
     * 2. if not found, create
     * 3. set value of config.json to companyBio
     * 4. connect to database
     * 5. if file not found, create new instance and run tables.sql
    */
    return true;
  }
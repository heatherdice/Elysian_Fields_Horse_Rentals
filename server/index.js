import { initDataStorage, companyBio } from "./storage";

if (initDataStorage()) 
  console.log("Data Storage Initialized Successfully.")

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
import { initDataStorage } from "./storage.js";

if (initDataStorage()) 
  console.log("Data Storage Initialized Successfully.")

import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
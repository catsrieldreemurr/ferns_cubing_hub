const express = require("express");
const cors = require("cors");
const db = require("./util/db")

const app = express();

app.use(express.json())
app.use(cors())

app.use("/", (req, res, next ) => {
  res.json({
    "test": "hi"
  })
})

async function createDatabaseConnection(){
  try{
    await db.authenticate();
    await db.sync();

    console.log("Successfully connected to the database!");
    app.listen(3000);
    
    console.log("----------------------------------------");
    console.log("Server is running at http://localhost:3000");
    console.log("----------------------------------------");
  } catch(err){
    console.log("Something went wrong, and we failed to connect to the database.", err)
  }
}


createDatabaseConnection();
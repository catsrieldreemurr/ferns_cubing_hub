const express = require("express");

const app = express();

app.use("/", (req, res, next ) => {
  res.json({
    "test": "hi"
  })
})

app.listen(3000);
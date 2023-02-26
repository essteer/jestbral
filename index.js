const express = require("express");
const app = express();
const path = require("parh");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("hello from index.js");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});

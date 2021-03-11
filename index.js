const express = require("express");
const app = express();
const routes = require("./routes");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(routes);

app.listen(3000, (error) =>
  error ? console.log("error") : console.log("👀👀")
);

const express = require("express");
const dbConnection = require("./config/db");
const app = express();
const port = process.env.PORT || 8000;
dbConnection();

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server up => http://localhost:${port}/`);
});

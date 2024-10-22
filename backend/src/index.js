const express = require("express");
const dbConnection = require("./config/db");
const glopalError = require("./middleware/error");
const passport = require("passport");
const strategy = require("./config/passport");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mountRoutes = require("./routes");

dbConnection();

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

// Enable other domains to access your application
app.use(cors());
app.options("*", cors());

// mildllwere
app.use(express.json());
passport.use(strategy);
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 8000;

// mildllwere
app.use(glopalError);
app.use(express.json());
passport.use(strategy);

// routes
mountRoutes(app);
// handle all unreched routes error
app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route: ${req.originalUrl}`, 404));
});

const server = app.listen(port, () => {
  console.log(`server up => http://localhost:${port}/`);
});

process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection Errors ${err.name} || ${err.message}`);
  server.close(() => {
    console.error(`Shtuing down...!`);
    process.exit(1);
  });
});

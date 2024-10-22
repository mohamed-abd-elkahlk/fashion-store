const User = require("../modules/user");
const jwtStrategy = require("passport-jwt").Strategy;

const cookiesExtractor = (req) => {
  let token;
  if (!req.cookies.jwt) {
    token = null;
    return token;
  }
  token = req.cookies.jwt;
  return token;
};

const secretOrKey = process.env.SEACRET || "123456789";
const strategy = new jwtStrategy(
  {
    jwtFromRequest: cookiesExtractor,
    secretOrKey,
  },
  (pyload, done) => {
    User.findById(pyload.sub)
      .then((user) => {
        if (!user) {
          return done(new Error("user not found try to regiseter"), false);
        }
        return done(null, user);
      })
      .catch((err) => done(err, false));
  }
);

module.exports = strategy;

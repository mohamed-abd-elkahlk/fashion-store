const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const genHash = (password) => {
  return bcrypt.hashSync(password);
};

const verifyPasswordHash = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

const issueJWT = (user) => {
  const id = user._id;
  const expiresIn = "10d";
  const { role } = user;
  const payload = {
    sub: id,
    role,
    iat: Date.now(),
  };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn });

  return token;
};
const varifyToken = (jwtToken) => {
  const decoded = jwt.verify(jwtToken, process.env.SECRET);
  return decoded;
};
module.exports = { issueJWT, genHash, verifyPasswordHash, varifyToken };

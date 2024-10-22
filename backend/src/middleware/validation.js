const { validationResult } = require("express-validator");

exports.validatorMiddleware = (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

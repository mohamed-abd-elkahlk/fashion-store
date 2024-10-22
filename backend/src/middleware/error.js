const glopalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  if (process.env.MODE === "devlopment") {
    return res.status(err.statusCode).json({
      status: err.status || "error",
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = glopalError;

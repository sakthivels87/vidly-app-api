const winston = require("winston");
//require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.File({
      filename: "unhandledExceptions.log",
    }),
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: "error",
    })
  );

  winston.add(
    new winston.transports.File({
      filename: "loggerInfo.log",
      handleExceptions: true,
    })
  );
  /* winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://127.0.0.1/vidly",
      level: "error",
    })
  );*/

  winston.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: "info",
    })
  );
};

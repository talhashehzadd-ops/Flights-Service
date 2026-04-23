// using winston for logging, standard templating doing for winston :-

const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const loggger = createLogger({
    format : combine(
          timestamp({format : "YYYY-MM-DD HH:mm:ss" }),  // this will add timestamp to our log and we can also specify the format of the timestamp
        customFormat
    ),
    transports : [
        new transports.Console(),  // this will print the log in the console
        new transports.File({ filename :" combined.log "})  // this will save the log in a file named app.log inside logs folder

    ]
});

module.exports = loggger;
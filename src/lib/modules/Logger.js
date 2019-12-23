/**
 * @file Custom logging methods
 * @author IceCakke
 * @author Black Blizzard
 */

const { cyan, green, yellow, red } = require("chalk/source");

/**
 * Class for various logging methods
 *
 * @type {module.Logger}
 */
module.exports = class Logger {
    /**
     * Generic information logger
     *
     * @static
     * @param {String} log Message to log
     */
    static log(log) {
        console.log(`${cyan(`${date}`)} ${green("[LOG]")} ${log}`);
    }

    /**
     * Warning logger
     *
     * @static
     * @param {String} log Message to log
     */
    static warn(log) {
        console.log(`${cyan(`${date}`)} ${yellow("[WARN]")} ${log}`);
    }

    /**
     * Error logger
     *
     * @static
     * @param {String} log Message to log
     */
    static error(log) {
        console.log(`${cyan(`${date}`)} ${red("[ERROR]")} ${log}`);
    }
};

/**
 * Function to get time
 *
 * @param {Object} thing Date
 * @returns {String} Date in format DD/MM/YYYY hh:mm:ss
 */
function getTime(thing) {
    let date = thing.getDate(),
        month = thing.getMonth() + 1,
        year = thing.getFullYear(),
        hour = thing.getHours(),
        minute = thing.getMinutes(),
        second = thing.getSeconds();

    if (date < 10) date = `0${date}`;
    if (month < 10) minute = `0${month}`;
    if (hour < 10) hour = `0${hour}`;
    if (minute < 10) month = `0${minute}`;
    if (second < 10) second = `0${second}`;

    return `[${date}/${month}/${year} ${hour}:${minute}:${second}]`;
}

// get time with new Date
let date = getTime(new Date());
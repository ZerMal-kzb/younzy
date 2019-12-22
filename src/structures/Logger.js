const { cyan, green, yellow, red } = require("chalk");

// fonction pour récupéré la date
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

let date = getTime(new Date()); // récupération de la date

module.exports = class Logger {
    /**
     * @description Permet d'avoir une console plus esthétique
     * @param client
     */
    constructor(client) {
        this.client = client;
    }

    static log(log) {
        console.log(`${cyan(`${date}`)} ${green("[LOG]")} ${log}`);
    }

    static warn(log) {
        console.log(`${cyan(`${date}`)} ${yellow("[WARN]")} ${log}`);
    }

    static error(log) {
        console.log(`${cyan(`${date}`)} ${red("[ERROR]")} ${log}`);
    }
};
/**
 * @file Class file for Younzy, extending the Discord.js Client class
 * @author IceCakke
 */

const Discord = require("discord.js");

/**
 * Main class for Younzy
 *
 * @type {module.Younzy}
 */
module.exports = class Younzy extends Discord.Client {
    /**
     * Creates a new Younzy instance
     *
     * @param options Discord.js client options
     * @see https://discord.js.org/#/docs/main/stable/class/Client
     */
    constructor(options) {
        super(options);

        // Collection
        this.commands = new Discord.Collection();
        this.aliases = new Discord.Collection();
        this.slowmode = new Discord.Collection();

        // Config
        this.config = require("../config/config"); // Load the config
        this.logger = require("./modules/Logger"); // Load the logger class
        this.package = require("../../package"); // Load the package
    }

    /**
     * Intialize the client
     *
     * @static
     * @param client new Discord.Client
     */
    initialize(client) {
        // login
        client.login(client.config.tokens.discordBot);
    }

};
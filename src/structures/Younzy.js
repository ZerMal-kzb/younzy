const { Client, Collection } = require("discord.js");

module.exports = class Younzy extends Client {
    /**
     * @description Class Principale
     * @param props
     */
    constructor(props) {
        super(props);

        // Collection
        this.commands = new Collection();
        this.aliases = new Collection();
        this.slowmdoe = new Collection();

        // Config
        this.config = require("../config/config"); // chargement du fichier config
        this.logger = require("./Logger"); // imporation du logger
        this.package = require("../../package"); // chargement du package
    }

    /**
     * @description Méthode pour intialisé le bot
     * @param client
     * @returns {Promise<void>}
     */
    async initialize(client) {
        // chargement des handlers a faire
        client.login(client.config.tokens.discordBot);
    }

};
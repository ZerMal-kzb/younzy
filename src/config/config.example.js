module.exports = {
    tokens: {
        // Tokens for APIs used by different commands
        discordBot: "", // Token used for authenticating with Discord. Can be found at : https://discordapp.com/developers/applications/BOT-ID/bots REPLACE BOT-ID by your BOT ID
        discordSecret: "" // Token used for connect Discord to WebSite. Can be found at : https://discordapp.com/developers/applications/BOT-ID/information REPLACE BOT-ID by your BOT ID
    },

    general: {
        // Configuration options for the main bot
        botName: "",
        botID: "",
        botVersion: (client) => client.package.version,

        // Default configuration
        defaultPrefix: "", // Default prefix to use
        defaultLanguage: "", // Default language to use

        // Embed
        embedColor: "",
        embedFooter: "",

        // Links
        supportServer: "",
        inviteBot: "",

        // Owners
        owners: [
            ""
        ]
    },

    emotes: {
        // emotes list
        yes: "",
        no: "",
        load: "",

        // emotes ID list
        yesID: "",
        noID: "",
        loadID: ""
    }
};
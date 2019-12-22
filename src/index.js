// importation de Younzy
const Younzy = require("./structures/Younzy");

// nouveau client
const client = new Younzy({
    disableEveryone: true,
    fetchAllMembers: true
});

// intialisation
client.initialize(client);
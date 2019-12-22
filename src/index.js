// imporation de younzy
const Younzy = require("./structures/Younzy");

// on créé un nouveau client
const client = new Younzy({
    disableEveryone: true,
    fetchAllMembers: true
});

// initialisaion du client
client.initialize(client);
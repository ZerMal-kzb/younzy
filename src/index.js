/**
 * @file The main file the makes everything work
 * @author IceCakke
 * @author Black Blizzard
 * @author Zermal.kzb
 * @copyright Copyright (c) 2019 IceCakke, Black Blizzard, Zermal.kzb and the repository contributors
 * @licence MIT
 */

// Imports
const Younzy = require("./lib/Younzy");

// Client stuff
const client = new Younzy({
    disableEveryone: true,
    fetchAllMembers: true
});

// Intialize
client.initialize(client);
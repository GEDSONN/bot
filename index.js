const { Client, Collection, GatewayIntentBits } = require("discord.js");

const {readdirSync} = require("fs");
const {token} = require('./config.json');

const client = new Client({
intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent
  ]
});

client.login(token);

module.exports = client;
require('./handler/slash.js')
require('./handler/evento.js')
//teste
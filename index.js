const { Client, Collection, GatewayIntentBits } = require("discord.js");

const {readdirSync} = require("fs");

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

client.login(process.env.token);

module.exports = client;
require('./handler/slash.js')
require('./handler/evento.js')
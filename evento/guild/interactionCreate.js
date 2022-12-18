const client = require("../../");
const discord = require("discord.js");


client.on('interactionCreate', (interaction) => {
  if(!interaction.isButton()) return;

if(interaction.customId === "ping+") {
  interaction.reply('oii')
}
  
});
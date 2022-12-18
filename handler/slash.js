const { readdirSync } = require("fs");
const client = require("..");
const { Collection } = require("discord.js");

//VARIAVEL 
client.commands = new Collection()
  const SlashCommands = []
  
  readdirSync("./commands").forEach(folder => {
    const files = readdirSync(`./commands/${folder}/`)
    for(let arq of files) {
      let command = require(`../commands/${folder}/${arq}`)
      if(command) {
        SlashCommands.push(command) 
        client.commands.set(command?.name, command)
      }
    }
  });

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    try {
      let command = client.commands.get(interaction.commandName) 
      if(!command) return; 
      command.run(client, interaction) 
    } catch(e) { 
      interaction.reply({
        content: "Error: `" + e.message + "`",
        ephemeral: true
      })
    }
  }
});


client.on("ready", () => {
    console.log(client.user.username + ' foi iniciado com sucesso')
    client.commands.set(SlashCommands)
});
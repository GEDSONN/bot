const { readdirSync } = require("fs")

module.exports = async (client) => {
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
  })
  }


  client.on("ready", () => {
    console.log(client.user.username + ' Está online e funcional!')
    client.guilds.cache.get("1018640578776408145").commands.set(SlashCommands) 

});

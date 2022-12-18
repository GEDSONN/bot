const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
  name: "saimg",
  description: "Me faça falar algo!",
  options: [
    {
      type: ApplicationCommandOptionType.String,
      required: true,
      description: "link",
      name: "message"
    }
  ],
  run: async(client, interaction) => {
    const argument = interaction.options.getString("message")

    
    const embed = new EmbedBuilder()
    .setImage(`${argument}`)
    .setColor("BLACK")

    interaction.channel.send({
      embeds: [embed]
    })

  }
}
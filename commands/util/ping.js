const { ActionRowBuilder, ButtonBuilder, ButtonStyle , EmbedBuilder} = require('discord.js');

module.exports = {
  name: "ping",
  description: "Veja minha latência!",
  run: async(client, interaction) => {

   let embed = new EmbedBuilder()
    .setColor("#000")
    .setDescription(`**PING**: \`\`\`${client.ws.ping}\`\`\``);
    
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('ping+')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);
    
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
      components: [row]
    });
  }
}
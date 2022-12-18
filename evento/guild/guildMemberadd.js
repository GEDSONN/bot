const client = require("../../");
const discord = require("discord.js");

client.on("guildMemberAdd", (member) => {
	let canal = client.guild.channels.cache.get('1018661223178436658');

const welcome_message = new discord.EmbedBuilder()
        .setColor('#000')
        .setDescription(` > <:emoji_galaxy3:1020200848992780319> <@${member.user.id}> **Seja-bem vindo(a)
> <a:emoji_galaxy2:1020113823958569051> Seja <#1018653510256042035> e obtenha vantagens no servidor**.`);

canal.send({embeds:[welcome_message]});

});
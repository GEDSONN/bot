const { EmbedBuilder } = require("discord.js")


module.exports = {
  name: "maker",
  description: "maker msg",
  run: async(client, interaction) => {
  
  const embd = new EmbedBuilder()
  .setTitle('**GALAXY GIFS - NITRO BOOSTER**')
  .setDescription(`<a:nitrogirandogg:1020827650501128222> **GALAXY GIFS - Nitro Booster**
> Com ele você adquire a opção de adicionar um ou dois boost em um servidor.
> Para impulsionar nosso servidor, é simples só clicar em:
> **GALAXY GIFS > Server Boost**

<:emoji_galaxy3:1020200848992780319>**Vantagens ao impulsionar o servidor:**
> Cargo <@&1018663140726153269> destacado.
> Permissão de enviar imagens no <#1018661223178436658> 
> Comando s!av no <#1018661223178436658> 
> Ganhe o símbolo. <:boostgg:1020831994390777887> na lista de                          membros.
> Emblema<:boost1gg:1020832214621110334>evolutivo especial no perfil.
> Acesso à categoria vip, com direito a pedidos exclusivos.`)
.setColor("#8604d2").setImage("https://media.discordapp.net/attachments/1018653510256042035/1019036332879777792/1663026925525.png");
    interaction.channel.send({embeds: [embd]})
  }}
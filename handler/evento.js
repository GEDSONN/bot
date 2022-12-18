const { readdirSync } = require("fs");

readdirSync("./evento").forEach(folder => {
    const files = readdirSync(`./evento/${folder}/`)
    for(let arq of files) {
      let evento = require(`../evento/${folder}/${arq}`)
      if(evento) {
        console.log(`arquivo: ${arq} carregado...`)
      }
    }
  });
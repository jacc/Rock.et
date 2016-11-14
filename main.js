/* ------------------------
          Rock.et
-------------------------*/
const Discord  = require('discord.js');
const client   = new Discord.Client();
//const reload   = require('require-reload');
const data     = require(__dirname + '/Modules/Data.js');
//const request  = require('request');
const version  = '1.0';


client.on('ready', () => {
  console.log("ayy lmao");
  client.user.setGame(`r.help | ${client.guilds.size} ships`)
});


client.on('guildCreate', (g) => {
  client.channels.get('247826860946358272').sendMessage("**Guild Joined** - "+g.name);

  if(!data.load().servers[g.id]) {
    var d = data.load();
    d.servers[g.id] = {
      "speed": "100"
    },
    data.save(d);
  }
});

client.login('MjQ3NzU0MTI2MjAzNjgyODI2.Cwu2Xw.IAFGMG9G6VmOMOrl6VOJdAbNm2M');

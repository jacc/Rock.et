/* ------------------------
          Rock.et
-------------------------*/
const Discord  = require('discord.js');
const client   = new Discord.Client();
var fs = require("fs")
const data = require(__dirname + '/data.js');
var prefix = "r."
//const reload   = require('require-reload');
//const data     = require(__dirname + '/Modules/Data.js');
//const request  = require('request');
const version  = '1.0';


client.on('ready', () => {
  console.log("ayy lmao");
  client.user.setGame(`r.help | ${client.guilds.size} ships`)
});

client.on('message', m => {
  if(!data.load().guilds[m.guild.id]) {
    var d = data.load();
    d.guilds[m.guild.id] = {
      name: m.guild.name,
      boost: 100
    }
    data.save(d);
  }

  var commands = fs.readdirSync("./commands/");
  if (m.content.startsWith(prefix)) {
    var command = m.content.split(" ")[0].replace("r.", "");
    if (commands.indexOf(command+".js") > -1) {
      var cmd = require("./commands/"+command+".js");
      var args = m.content.split(" ");
      args.splice(0, 1);
      args = args.join(" ");
      try {
        cmd.func(client, m, args);
      } catch (err) {
        console.log('error','Command '+command+' error! '+err.stack);
        m.channel.sendMessage(":warning: Something went wrong with the loading of that module/command.```" + err + "```");
      }
    } else {
      m.channel.sendMessage("Hmm? What's `" + command + "` ? I don't remember that.")
    }
  }
});

client.on('guildCreate', (g) => {
  client.channels.get('247826860946358272').sendMessage("**Guild Joined** - Owner: "+g.name+" - **"+g.owner+"** - __"+g.memberCount+"__ members.");
  client.user.setGame(`r.help | ${client.guilds.size} ships`)
  if(!data.load().guilds[g.id]) {
    var d = data.load();
    d.guilds[g.id] = {
      boost: 100
    },
      data.save(d);
  }
});

client.on('guildDelete', (g) => {
  client.channels.get('247826860946358272').sendMessage("**Guild Deleted** - Owner: "+g.name+" - **"+g.owner+"** - __"+g.memberCount+"__ members.");
  client.user.setGame(`r.help | ${client.guilds.size} ships`)

});

client.timeouts = {};
client.login('noot');

const db = require(__dirname + '/../db.json');
module.exports.info = "placeholder.";
var emoji = [":star:", ":star2:", ":stars:", ":rocket:", ":comet:", ":sparkles:", ":fireworks:", ":dizzy:", ":fire:"]
module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage(`${emoji[Math.floor(Math.random() * emoji.length)]} | __${m.guild.name}__'s current speed is: **${db.guilds[m.guild.id].boost}mph**.`)
}

const db = require(__dirname + '/../data.js');
var zoom = ["ZOOT ZOOT", "WHAM!", ".....ZOOOOOOOMNMMMMMMM......", "FASTER!", "WIZZ", "PEW"]
var emoji = [":star:", ":star2:", ":stars:", ":rocket:", ":comet:", ":sparkles:", ":fireworks:", ":dizzy:", ":fire:"]
var allowed = {};

module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  if(!allowed[m.guild.id]) {
    msg.channel.sendMessage(":warning: **That command has a cooldown of 300 seconds. Please try again later.**");
  } else {
    m.delete();
    m.channel.sendMessage('**Boosting...**').then( m => {
     var num = Math.floor(Math.random() * 10000) + db.load().guilds[m.guild.id].boost;
      var d = db.load();
      d.guilds[m.guild.id].boost = num;
     db.save(d);
     allowed[m.guild.id] = false;
     setTimeout(() => {
       allowed[m.guild.id] = true;
     }, 300000);
     m.channel.sendMessage(`${emoji[Math.floor(Math.random() * emoji.length)]} | **${zoom[Math.floor(Math.random() * zoom.length)]}! Upgraded to ${num} miles per hour!**`)
     m.delete();
   }).catch(console.error);
  }
}

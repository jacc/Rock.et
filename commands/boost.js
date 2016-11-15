const db = require(__dirname + '/../data.js');
var zoom = ["ZOOT ZOOT", "WHAM!", ".....ZOOOOOOOMNMMMMMMM......", "FASTER!", "WIZZ", "PEW"]

module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage('**Boosting...**').then( m => {
    var num = Math.floor(Math.random() * 10000) + db.load().guilds[m.guild.id].boost;
    var d = db.load();
    d.guilds[m.guild.id].boost = num;
    db.save(d);
    m.channel.sendMessage(`:rocket: | **${zoom[Math.floor(Math.random() * zoom.length)]}! Upgraded to ${num} miles per hour!**`)
    m.delete();
  }).catch(console.error);
}

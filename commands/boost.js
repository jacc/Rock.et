const db = require(__dirname + '/../data.js');
var zoom = ["ZOOT ZOOT", "WHAM!", ".....ZOOOOOOOMNMMMMMMM......", "FASTER!", "WIZZ", "PEW"]

module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage('wew').then( m => {
    var num = Math.floor(Math.random() * 5000) + 100;
    var d = db.load();
    d.guilds[m.guild.id].boost = num;
    db.save(d);
    m.channel.sendMessage(`:rocket: | **${zoom[Math.floor(Math.random() * zoom.length)]}**! __${m.guild.name}__'s rocket is now at **${num} miles per hour!**`)  
  }).catch(console.error);
}

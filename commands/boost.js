const db = require(__dirname + '/../data.js');
var zoom = ["ZOOT ZOOT", "WHAM!", ".....ZOOOOOOOMNMMMMMMM......", "FASTER!", "WIZZ", "PEW"]
var z = zoom[Math.floor(Math.random() * answers.length)];

module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  m.delete();
  .then( m => {
    var num = Math.floor(Math.random() * 5000) + 100;
    db.save(db.load().guilds[m.guild.id].boost = num);
    m.channel.sendMessage(`:rocket: | **${z}**! __${m.guild.name}__'s rocket is now at **${num} miles per hour!**`)  
  }).catch(console.error);
}

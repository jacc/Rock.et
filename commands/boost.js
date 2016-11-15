const db = require(__dirname + '/../data.js');

module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage("wip")
  .then( m => {
    var num = Math.floor(Math.random() * 5000) + 100;
    db.save(db.load().guilds[m.guild.id].boost = num);
  }).catch(console.error);
}

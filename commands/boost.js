/*
module.exports.info = "placeholder.";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('servers.db');
var check;

module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage("wip")
  var boost = 1.8*7.9
  .then( m => {
    db.run("CREATE TABLE if not exists rocket_val|" + message.guild.id + " (info TEXT)");

    var stmt = db.prepare("INSERT INTO rocket_val|" + message.guild.id + " VALUES (?)");
    stmt.run(`${boost}`

    db.each("SELECT rowid AS id, info FROM rocket_val|" + sender.id, function(err, row) {
        msg.author.sendMessage("`" + row.id + ": " + row.info + "`");
    });
  }).catch(console.error);
}
*/

module.exports.info = "placeholder.";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('servers.db');
var check;
var boost = 1.8*7.9

module.exports.func = function(bot, m, args) {
  m.delete();
  m.channel.sendMessage("wip")
  .then( m => {
    db.serialize(function() {
      db.run("CREATE TABLE if not exists rocket_val_" + m.guild.id + " (info TEXT)");

      var stmt = db.prepare("INSERT INTO rocket_val_" + m.guild.id + " VALUES (?)");
      stmt.run(`${boost}`)

      db.each("SELECT rowid AS id, info FROM rocket_val_" + m.guild.id, function(err, row) {
          m.channel.sendMessage("`" + row.id + ": " + row.info + "`");
      });
    })
  }).catch(console.error);
}

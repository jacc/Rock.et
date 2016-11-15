module.exports.info = "placeholder.";
module.exports.func = function(bot, m, args) {
  m.delete();
  var msgArray = [];
  msgArray.push("Hi. I'm rock.et, a pretty useless but fun bot.");
  msgArray.push("Bascially, this server is on a mission to the moon now. You can't stop it.");
  msgArray.push("Currently there is only three commands: `boost`, `speed`, and `leaderboard`(this one doesnt work).");
  msgArray.push("You can also count this help command if you want.");
  msgArray.push("`r.boost` - Makes your rocket's current speed go faster. WOO!");
  msgArray.push("`r.speed` - Your server's current speed.");
  msgArray.push("`r.leaderboard` - Showing the top 10 servers. Soon:tm:.");
  msgArray.push("If you really need help, get it here: https://discord.gg/DvVSXCQ")
  msgArray.push("This bot was created by **Jack#0305**, **DoctorDarkMagic ツ#3790**, and **Charia#6059**.");
  m.channel.sendMessage(msgArray)
}

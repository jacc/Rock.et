
const fs = require("fs");

module.exports = {
	load: function() {return JSON.parse(fs.readFileSync(__dirname + "/db.json"));},
	save: function(data) {fs.writeFileSync(__dirname + "/db.json", JSON.stringify(data, null, "\t"));}
}

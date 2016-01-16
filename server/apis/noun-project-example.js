var OAuth = require('oauth');

var KEY = "<INSERT KEY HERE>"
var SECRET = "<INSERT SECRET HERE>"

var nounProject = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0A',
	null,
	'HMAC-SHA1',
	undefined,
	{"Accept": "application/json"}
)

module.exports = nounProject;

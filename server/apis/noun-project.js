var OAuth = require('oauth');

var nounProject = {};

nounProject.KEY = "40afe5bae43247e18fa364c8fe7aa9b8";
nounProject.SECRET = "17a114e8e7ec43eb8c244239bdd5ca6d";

nounProject.call = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	nounProject.KEY,
	nounProject.SECRET,
	'1.0A',
	null,
	'HMAC-SHA1',
	undefined,
	{"Accept": "application/json"}
)

module.exports = nounProject;

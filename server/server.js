var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

var app = express();
var jsonParser = bodyParser.json();
var port = process.env.PORT || 4568;

//******** SET UP DATABASE
//************************

var dbURI = 'mongodb://localhost/jimini'
mongoose.connect(dbURI);
var Schema = mongoose.Schema;
var userSchema = new Schema ({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
	
});
userSchema.plugin(uniqueValidator);
var User = mongoose.model('User', userSchema);


app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//********HANDLE REQUEST TO ROOT

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());

app.post('/signup', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	//hash password
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {

			//store user info
			var user = User({
				username: username,
				password: hash
			});

			user.save(function(err, user) {
				if (err) {
					console.log("error: ", err);
				}

				console.log('user that was saved:', user);
			});

		});
	})
})

app.listen(port);
console.log('Listening on port ' + port + '...');

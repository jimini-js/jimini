var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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
	password: { type: String, required: true },
	address: { type: String }
});
userSchema.plugin(uniqueValidator);
var User = mongoose.model('User', userSchema);

var wishSchema = new Schema({
  username: String,
  wishname: String,
  category: String,
  link: String,
  description: String,
  purchased: Boolean
});
var Wish = mongoose.model('Wish', wishSchema);


app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//********HANDLE REQUEST TO ROOT

// JWT config - sets up secret
var jwtSecret = 'thupers3crT$12';
app.set('superSecret', jwtSecret);

//middleware
function authenticate(req, res, next){
	//checks for token in request
  	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	  console.log('in auth mw - req.headers: ', req.headers);
	  if (token) {
	  	console.log('in auth mw - token exists');

	  	// verify token validity - if valid, next()'' if not, return success: false
	    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
	      if (err) {
	      	console.log(' in auth mw - err verifying token:', err);
	        return res.json({ success: false, message: 'Failed to authenticate token.' });    
	      } else {
	      	console.log('in auth mw - successfully verified token:', decoded);
	        req.decoded = decoded;    
	        next();
	      }
	    });

	  } else {
	  	console.log('in auth mw - no token provided')
	    return res.status(403).send({ 
	        success: false, 
	        message: 'No token provided.' 
	    });    
	}
}

//serves html, authenticates
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'))
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
				password: hash,
			});

			user.save(function(err, user) {
				if (err) {
					console.log("error: ", err);
					res.send(err);
				}
				console.log('user was saved:', user);
				//create token
				var token = jwt.sign(user, app.get('superSecret'), { expiresInminutes:1440 });
				console.log('after user saved, this token was created:', token)
				//send token
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token,
					username: user.username,
					password: user.password
				});
			});

		});
	})
})
//finds user in db, if exists --> callback
function authenticateUser(username, password, callback){

  User.findOne({username: username}, function(err, user){
    if (err) {
    	console.log('err finding user');
    }
    else {
    	console.log('found user', user)
    	callback(err, user);
    }
  });
}

//******CHECKS THAT USER AND PASSWORD EXISTS

app.post('/login', function(req, res){

	var username = req.body.username;
	var password = req.body.password;

	authenticateUser(username, password, function(err, user){
	    if (user) {
	     
	      	bcrypt.compare(password, user.password, function(err, loggedin) {
	      		if (loggedin) {
	      			console.log ('you are logged in!');
	      			var token = jwt.sign(user, app.get('superSecret'), {
			          expiresInMinutes: 1440 // expires in 24 hours
			        });

			        // return the information including token as JSON
			        res.json({
			          success: true,
			          message: 'Enjoy your token!',
			          token: token,
			          username: username
			        });
	      		} else {
	      			console.log ('wrong username/password!');
	      			res.send('InvalidPassword');
	      		}
	      	})

	    } else {
	    	console.log('user does not exist');
	    	res.send('InvalidUser');
	    }
	});
});

//*****ADDS WISHES TO WISHLIST

app.post('/wishlist', function(req, res){
	var username = req.body.username;
	var wishname = req.body.wishname;
	var category = req.body.category;
	var link = req.body.link;
	var description = req.body.description;
	console.log('all info for wish in post request: ',
			username,
			wishname,
			category,
			link,
			description);
	var wish = Wish({
		username: username,
        wishname: wishname,
        category: category,
        link: link,
        description: description
	});

	wish.save(function(err, wish) {
		if (err) {
			console.log("error: ", err);
		}
		console.log('wish that was saved:', wish);
		res.send(wish);
		res.end();
	});

});

//*********GETS ALL WISHES FOR GIVEN USER

app.get('/allwishes', function(req, res){
	var username = req.query.username;

	console.log('username that we queried for wishes: ',
			username);

	Wish.find({ username: username }, function(err, wish) {
		if (err) {
			console.log('error getting all wishes for user:', err)
		} else {
			console.log('found all users wishes.. success!', wish)
			res.send(wish);
		}
	});
});

//*********DELETE a wish
app.delete('/wish', function(req,res){
	console.log('handling DELETE request to /wish');
	console.log('req.body.id: ', req.body.id);
	var id = req.body.id;
	Wish.find({_id:id}).remove(function(err,removed){
		res.send(removed.result);
	})
});

app.listen(port);
console.log('Listening on port ' + port + '...');

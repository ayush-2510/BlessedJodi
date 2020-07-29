var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
});



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'blessedjodi1998@gmail.com',
		pass: 'blessed_jodi'
	}
});


function myfunction(email) {
	var mailOptions = {
		from: 'blessed-jodi.com',
		to: email,
		subject: 'Welcome to Blessed Jodi(We match better)',
		html: "<h1 style='text-align:center;color:#d61a1a'>You have been Registered successfully</h1><h3>Thank you for joining with us, we would be grateful to find your soulmate</h3>"
			+ "<h4>As a leader in what is sometimes known as the matrimony category, we have touched more than 35 million lives. Blessed Jodi has always differentiated itself from other matrimonials through its innovation-led approach. By redefining the way Indian brides and grooms meet for marriage, Blessed Jodi has created a world-renowned brand that has changed the way of finding a life partner.</h4><h2 style='text-align:center;color:#d61a1a'>Your story is waiting to happen...</h2>" +
			"<a href='http://localhost:4200/' style='font-size:15px;text-align:center'>Click here to visit the website</a>"
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});


}


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Project", { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
	var userSchema = new mongoose.Schema({

		mobile_no: String,
		username: String,
		email: String,
		password: String
	}, { collection: 'users' });

	var userData = new mongoose.Schema({
		username: String,
		name: String,
		father_name: String,
		gender: String,
		religion: String,
		language: String,
		height: String,
		weight: String,
		birth_date: Date,
		age: Number,
		place: String,
		status: String,
		address: String,
		city: String,
		state: String
	}, { collection: 'reg1' });

	var userData2 = new mongoose.Schema({
		username: String,
		education: String,
		field: String,
		workplace: String,
		workas: String,
		income: String,
		hobbies: String,
		future: String,
		bio: String,
		exp: String
	}, { collectio: 'reg2' });

	var Reg1 = mongoose.model("Reg1", userData);
	var Reg2 = mongoose.model("Reg2", userData2);
	var User = mongoose.model("User", userSchema);


	app.post("/sendMail", (req, res) => {
		console.log("In");
		myfunction(req.body.email);
		res.status(200).send("Email sent");
	});


	app.post("/signup", (req, res) => {
		var myData = new User(req.body);
		console.log(myData)
		myData.save(function (err, user) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {
				console.log(user)
				console.log("User added!");
				res.send({ "message": "User record saved successfully" });
			}
		});
	});

	app.post("/regform/1", (req, res) => {
		var myRegData = new Reg1(req.body);
		console.log(myRegData)
		myRegData.save(function (err, reg1) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {
				console.log(reg1)
				console.log("User data Added!");
				res.send({ "message": "User record saved successfully" });
			}
		});
	});

	app.post("/regform/2", (req, res) => {
		var myRegData2 = new Reg2(req.body);
		console.log(myRegData2)
		myRegData2.save(function (err, reg2) {
			if (err) {
				res.status(400);
				res.send("Unable to add names");
			}
			else {
				console.log(reg2)
				console.log("User data Added!");
				res.send({ "message": "User record saved successfully" });
			}
		});
	});


	app.post("/login", (req, res) => {
		var myData = req.body
		User.findOne({ username: myData.username }, (err, user) => {
			if (err) {
				console.log("error from server" + err)
			} else {
				if (!user) {
					res.status(401).send('Invalid username')
				} else {
					if (user.password !== myData.password) {
						res.status(401).send('Invalid password')
					} else {
						console.log("sent succesfully")
						res.status(200).send(user)
					}
				}
			}
		})
	})

	app.post("/profile", (req, res) => {
		var flag = 0;
		console.log(req.body.uname)
		Reg1.findOne({ username: req.body.uname }, (err, user) => {
			if (err) {
				console.log("error from server" + err)
				res.send(err);
			} else {
				if (!user) {
					res.status(401).send('Invalid username')
				} else {
					console.log("Fetch succesfully")
					res.status(200).send(user)
				}
			}
		})
	})

	app.post("/profile1", (req, res) => {
		var flag = 0;
		console.log(req.body.uname)
		Reg2.findOne({ username: req.body.uname }, (err, user) => {
			if (err) {
				console.log("error from server" + err)
				res.send(err);
			} else {
				if (!user) {
					res.status(401).send('Invalid username')
				} else {
					console.log("Fetch succesfully")
					res.status(200).send(user)
				}
			}
		})
	})

	app.get('/admin', (req, res) => {

		User.find({}, function (err, userdata) {
			if (err) {
				res.send(400)
			}
			else {
				res.send(userdata)
			}
		})
	})

	app.post('/update', (req, res) => {
		Reg1.update({ 'username': req.body.uname }, { $set: { 'age': req.body.udata.age, 'name': req.body.udata.name, 'father_name': req.body.udata.father_name, 'religion': req.body.udata.religion, 'language': req.body.udata.language, 'height': req.body.udata.height, 'weight': req.body.udata.weight, 'place': req.body.udata.place, 'status': req.body.udata.status, 'address': req.body.udata.address, 'city': req.body.udata.city, 'state': req.body.udata.state } }, function (err, data) {

			if (err) {
				console.log(err)
			}
			else {
				console.log('Updated')
				res.send(data)
			}

		})

	})

	app.post('/update1', (req, res) => {
		Reg2.update({ 'username': req.body.uname }, { $set: { 'education': req.body.udata.education, 'field': req.body.udata.field, 'workplace': req.body.udata.workplace, 'workas': req.body.udata.workas, 'income': req.body.udata.income, 'hobbies': req.body.udata.hobbies, 'future': req.body.udata.future, 'bio': req.body.udata.bio, 'exp': req.body.udata.exp } }, function (err, data) {

			if (err) {
				console.log(err)
			}
			else {
				console.log('Updated')
				res.send(data)
			}

		})

	})

	app.post("/remove", (req, res) => {
		console.log('data is going to be deleted')
		var body= req.body
		console.log(body.uname)
		User.remove({ username: body.uname }, (err, user) => {
			if (err) {
				console.log(err)
			}
			else {
				console.log('User Deleted')
				res.send(user)
			}

		})
	})


}
app.listen(8000);
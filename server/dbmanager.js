var mongojs = require('mongojs');
var uri = "mongodb://nguyenductu:tu228787@ds061711.mongolab.com:61711/english?authSource=english"
var db = mongojs(uri, ["words", "users"]);
var save_word = function(req, res, next){
	db.words.insert({word: req.params.word});
	res.send("Insert ok");
}
var users_signup = function(username, password){
	db.users.insert({username: username, password: password});
	return 1;
}

var users_login = function(username, password, req, res){
	db.users.find({username: "hoangdung"}, function(err, doc){
		if (doc.length > 0) {
			res.send({result: "OK"});
		}
		else 
		{
			res.send({result: "Failed"});
		}
	});
}
module.exports = {
	save_word: save_word,
	users_signup: users_signup,
	users_login: users_login
}
var dbmanager = require('./dbmanager');

var create =  function(req, res, next){
	var tmp = dbmanager.users_signup(req.params.username, req.params.password);
	if (tmp == 1){
		res.send({result: "OK"})
	} else {
		res.send({result: "Failed"})
	}
}

module.exports = {
	create: create
}
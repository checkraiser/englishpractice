var dbmanager = require('./dbmanager');

var login =  function(req, res, next){
	dbmanager.users_login(req.params.username, req.params.password, req, res);
}

module.exports = {
	login: login
}
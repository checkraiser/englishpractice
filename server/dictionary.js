var request = require('request');
var $ = require('cheerio');


var processor = function(req, res, next){
	return function(error, response, body){
		var results = $("div.entryPageContent section.se1.senseGroup", body).map(function(){
			return $(this).text();
		}).get();
		res.send(results.join("********\n"));
	}
}
var translate = function(req, res, next){
	var url = "http://www.oxforddictionaries.com/definition/english/" + req.params.word + "?s=t";
	request.get(url, processor(req, res, next));
}

module.exports = translate;
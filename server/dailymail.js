var request = require('request');
var $ = require('cheerio');
var urlencode = require('urlencode');
var dailymail = function(req, res, next){
	request.get("http://www.dailymail.co.uk/health/index.html", function(error, response, body){
		var results = $('div#content div.article.article-small h2 a', body).map(function(){
			var title = $(this).text();
			var url = $(this).attr("href");
			return {title: title, url: urlencode.encode(url)};
		}).get();
		res.send(results);
	});
}
var dailymail_url = function(req, res, next){
	request.get("http://www.dailymail.co.uk/" + req.params.url, function(error, response, body){
		var results = $('p.mol-para-with-font', body).map(function(){
			var tmp = $(this).text();
			return tmp.split(" ");
		}).get();

		res.send(results);
	});
}

module.exports = {
	dailymail: dailymail,
	dailymail_url: dailymail_url
}
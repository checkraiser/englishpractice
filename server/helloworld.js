var express = require('express');
var app = express();
var dailymail = require('./dailymail');
var dictionary = require('./dictionary');
var dbmanager = require('./dbmanager');
var users = require('./users');
var sessions = require('./sessions');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('../client'));
app.get('/api/v1/dailymail', dailymail.dailymail);
app.get('/api/v1/dailymail/:url', dailymail.dailymail_url);
app.get('/api/v1/translate/:word', dictionary);
app.get('/api/v1/save_word/:word', dbmanager.save_word);
app.get('/api/v1/login/:username/:password', sessions.login);
//app.get('/api/v1/logout', sessions.logout);
app.get('/api/v1/signup/:username/:password', users.create);


app.listen(3000);
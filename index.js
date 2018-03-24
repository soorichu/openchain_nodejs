var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/accounts', function(request, response){
	response.render('pages/accounts');
});

app.get('/ballot', function(request, response){
	response.render('pages/ballot');
});

app.get('/blockchain-explorer', function(request, response){
	response.render('pages/blockchain-explorer');
});

app.get('/simple-contract', function(request, response){
	response.render('pages/simple-contract');
});

app.get('/simple-auction', function(request, response){
	response.render('pages/simple-auction');
});

app.get('/tictactoe', function(request, response){
	response.render('pages/tictactoe');
});

app.get("/token-wallet", function(request, response){
	response.render('pages/token-wallet');
});

app.get("/site-menu", function(request, response){
	response.render('pages/site-menu');
});

app.get("/simple-steem", function(request, response){
	response.render('pages/simple-steem');
});

app.get("/steemit-api-test", function(request, response){
	response.render('pages/steemit-api-test');
});

app.get("/steem-json-parsing", function(request, response){
	response.render('pages/steem-json-parsing');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/times', function(request, response) {
	var result = '';
	var times = process.env.TIMES || 5;
	for(i=0; i<times; i++)
		result += i + ' ';
	response.send(result);
});
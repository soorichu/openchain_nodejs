var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5001));

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

app.get("/django_test", function(request, response){
	var spawn = require('child_process').spawn,
    py    = spawn('python', ['django_site/manage.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';
    py.stdout.on('data', function(data){
	  dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  console.log('Sum of numbers=',dataString);
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
		response.render('pages/django_test')
});

app.get('/django_test2', function(resquest, response){
	var exec = require('child_process').exec;
	exec('python python_test.py', function(error, stdout, stderr) {
		response.render('pages/django_test2', {name : "soori", age : "secret", month : 8, day : 19, printpy: stdout});
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	        console.log('exec error: ' + error);
	    }
	});

	

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

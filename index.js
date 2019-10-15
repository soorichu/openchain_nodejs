const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const apiKey = "f7d4f11c9c4a72e8bf499ce78803d08a";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 5002));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/index', function(request, response) {
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

app.get('/plotly_test', function(resquest, response){
	response.render('pages/plotly_test', {title: "Simple Graph", reference:"This is Simple Graph"});
});

app.get('/graph_2d', function(resquest, response){
	response.render('pages/graph_2d', {title: "2D Graph Animation", reference:"This is 2D Graph Animation"});
});

app.get('/graph_my2d', function(resquest, response){
	response.render('pages/graph_my2d',{title: "My 2D Graph", reference:"You can draw 2D Graph if you input on text-box which is combined by valuable; x."});
});

app.get('/lineplot', function(request, response){
	response.render('pages/lineplot', {title: "LinePlot by Plotly", reference:"졸리다......."});
});

app.get('/xlxsgraph', function(request, response){
	response.render('pages/xlxsgraph', {title: "XLXS to Graph", reference:"아이고......."});
});

// app.get('/openweather', function(resquest, response){
// 	let city = 'incheon';//request.body.city;
// 	let url = `http://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid=&{apiKey}`

// 	request(url, function(error, response, body){

// 		if(error){
// 			response.render('pages/openweather', {weather:"", error:'Error'});

// 		}else{
// 			let weather = JSON.parse(body);
// 			if(weather.main == undefined){
// 				response.render('pages/openweather', 
// 					{title :"Open Weather", reference:"https://www.openweathermap.org", weather:"", error:'Error'});
// 			}else{
// 				let weatherText = `It's ${weather.main.temp} degree in ${weather.name}!`;
// 				response.render('pages/openweather', 
// 					{weather:weatherText, error:"", title :"Open Weather", reference:"https://www.openweathermap.org"});
// 			}
// 		}

// 	});
// });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/times', function(request, response) {
	let result = '';
	let times = process.env.TIMES || 5;
	for(i=0; i<times; i++)
		result += i + ' ';
	response.send(result);
});

// set up ========================
	var express  = require('express');
	var app      = express(); 		
// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	app.get('/w3.css', function(req, res) {
		res.sendfile('w3.css'); // load the single view file (angular will handle the page changes on the front-end)
	});
	// listen (start app with node server.js) ======================================
	app.listen(8080, '0.0.0.0');
	console.log("App listening on port 8080");
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var getAPI = require('./app/routing/apiRoutes.js')(app);
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
var friends = require('./app/data/friends.js');

// app.get('/', htmlRoutes.rootDir);
// app.get('/survey', htmlRoutes.surveyDir);
// app.get('/api/:name?', getAPI);

app.listen(port, ()=>{
	console.log("App listening on PORT " + port);
	console.log(friends);
})
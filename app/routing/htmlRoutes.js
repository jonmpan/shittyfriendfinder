var path = require('path');
var friends = require('../data/friends.js');

function rootDir (req, res){
	console.log(path.join(__dirname, '../public/home.html'));
	res.sendFile(path.join(__dirname, '../public/home.html'));
};

function surveyDir (req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
};

function homeCSS (req, res){
	console.log(path.join(__dirname, '../public/style.css'));
	res.sendFile(path.join(__dirname, '../public/style.css'));
}

module.exports = function(app){
	app.get('/', rootDir);
	app.get('/style.css', homeCSS);
	app.get('/survey', surveyDir);
};

// module.exports = function(app,express){
// 	app.use(express.static("app/public/home"));
// };
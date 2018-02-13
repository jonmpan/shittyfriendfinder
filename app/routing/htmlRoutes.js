var path = require('path');
var friends = require('../data/friends.js');

var questions = [
	{q:"q1",ques:"Everyone Poops"},
	{q:"q2",ques:"All life stems from poop"},
	{q:"q3",ques:"I like the smell of my own poop"},
	{q:"q4",ques:"Other people's poops don't smell that bad"},
	{q:"q5",ques:"I prefer diarrhea over constipation"},
	{q:"q6",ques:"A good poop inspires me"},
	{q:"q7",ques:"I appreciate a freshly warmed toilet seat"},
	{q:"q8",ques:"I prefer soft and moist over hard and crusty"},
	{q:"q9",ques:"I'd rather eat my own poop over someone else's poop"},
	{q:"q10",ques:"I'd rather poop from my mouth than pee from my eyes"}
]

function rootDir (req, res){
	console.log(path.join(__dirname, '../public/home.html'));
	res.sendFile(path.join(__dirname, '../public/home.html'));
};

function surveyDir (req, res){
	res.render("questions", {questions:questions});
};

function homeCSS (req, res){
	console.log(path.join(__dirname, '../public/style.css'));
	res.sendFile(path.join(__dirname, '../public/style.css'));
}

function backgroundDir(req,res){
	console.log(path.join(__dirname, '../public/images/background.jpg'));
	res.sendFile(path.join(__dirname, '../public/images/background.jpg'));
}

function backgroundDirPNG(req,res){
	console.log(path.join(__dirname, '../public/images/background.png'));
	res.sendFile(path.join(__dirname, '../public/images/background.png'));
}
function backgroundDir2(req,res){
	console.log(path.join(__dirname, '../public/images/background2.png'));
	res.sendFile(path.join(__dirname, '../public/images/background2.png'));
}

function poopLogoWhiteDir(req,res){
	res.sendFile(path.join(__dirname, '../public/images/pooplogo.png'));
}
module.exports = function(app){
	app.get('/', rootDir);
	app.get('/style.css', homeCSS);
	app.get('/survey', surveyDir);
	app.get('/background.jpg', backgroundDir);
	app.get('/background.png', backgroundDirPNG);
	app.get('/background2.png', backgroundDir2);
	app.get('/pooplogo.png', poopLogoWhiteDir);
};

// module.exports = function(app,express){
// 	app.use(express.static("app/public/home"));
// };
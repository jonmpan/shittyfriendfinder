var path = require('path');
var friends = require('../data/friends.js');
var errorResponse = {"message":"No person with that name"};

function getAPI (req, res){
	var name = req.params.name;
	if(name){
		console.log(name);
		for(var i = 0; i < friends.length; i++){
			if(name.toLowerCase() === friends[i].name.toLowerCase()){
				console.log('1');
				return res.json(friends[i]);
			}
		}
		return res.json(errorResponse);
	}
	return res.json(friends);
}

function postAPI (req, res){
	var newPerson = req.body;
	// newPerson.scores = newPerson["scores[]"];
	console.log(newPerson);
	var temp = 0;
	for(var i=0; i<friends.length; i++){
		if(friends[i].name === newPerson.name && friends[i].email === newPerson.email){
			// return res.json("someone with the same name and email exists");
			calculateFriends(newPerson);
			for(var i = 0; i < friends.length; i++) {
    			if(friends[i].name == newPerson.name) {
        			friends.splice(i, 1);
        			break;
    			}
			}
			friends.push(newPerson);
			return res.json({unique:'name-email',friends:friends.slice(0,3)});
			console.log(friends);
		}
		else if(friends[i].name === newPerson.name){
			// return res.json("someone with the same name exists");
			calculateFriends(newPerson);
			for(var i = 0; i < friends.length; i++) {
    			if(friends[i].name == newPerson.name) {
        			friends.splice(i, 1);
        			break;
    			}
			}
			friends.push(newPerson);
			return res.json({unique:'name',friends:friends.slice(0,3)});
			console.log(friends);
		}
		else if(friends[i].email === newPerson.email){
			// return res.json("someone with the same email exists");
			for(var i = 0; i < friends.length; i++) {
    			if(friends[i].email == newPerson.email) {
        			friends.splice(i, 1);
        			break;
    			}
			}
			friends.push(newPerson);
			calculateFriends(newPerson);
			return res.json({unique:'email',friends:friends.slice(0,3)});
			console.log(friends);
		}
		else{
			temp++;
			console.log('temp '+temp);
		}
	}
	if(temp === friends.length){
		calculateFriends(newPerson);
		friends.push(newPerson);
		res.json({unique:'yes',friends:friends.slice(0,3)});
		console.log(friends);
	}
}

function calculateFriends(newPerson){
	//Run through array and compare scores to calculate compatibility
	friends.forEach((data)=>{
		if(newPerson.name != data.name && newPerson.email != data.email){
			data.compatibility = 0;
			for(var i=0; i<data["scores[]"].length; i++){
				data.compatibility += Math.abs(parseInt(data["scores[]"][i]) - parseInt(newPerson["scores[]"][i]));
			}
			data.compatibility = (40-data.compatibility)/40;
		}
	})
	friends.sort(function(a,b){
		return b.compatibility - a.compatibility;
	});
	return friends;
}

module.exports = function(app){
	app.get('/api/:name?', getAPI);
	app.post('/api/new', postAPI);
};
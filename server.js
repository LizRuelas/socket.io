/*var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));
io.on("connection", function(client) {
	client.on("conectando", function (usuario) {

		

	client.on("init", function (usuario) {
	
});

server.listen(process.env.PORT || 8080, function() {
	console.log("El servidor ha iniciado en el puerto 8080");
});*/

var state = {
	entries: [
		'peli1',
		'peli2',
		'peli3',
	],
	
};

state = {
	entries: [
		'peli3',
	],
	vote: {
		pair : [
			'peli1',
			'peli2',
		],
		tally: {
			peli1: 0, 
			peli2: 0, 
		}
	}	
};

function next(state) {
	var _entries = state.entries.slice();

	var votea = _entries.shift();
	var voteb = _entries.shift();
	var votes = [];
	votes.push(votea);
	votes.push(voteb);

	return Object.assign({}, state, {
		entries : _entries,
		vote: {
			pair:votes,
		} 
	});	

	

}



function vote(state, select) {
	var _vote = Object.assign({}, state.vote);

	if (!_vote.hasOwnProperty('tally')) {
		_vote.tally = {};
	}

	if (!_vote.tally.hasOwnProperty(select)) {
		_vote.tally[select] = 0	;
	}
	_vote.tally[select]++;

	return Object.assign({}, state , {
		vote: _vote
	}) 
	
};    
console.log(vote(state,'peli1'));

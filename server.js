const express = require('express');
const socket = require('socket.io');

app = express();
server = app.listen(8000, ( => {
	console.log('Running at localhost:8000');
}));

app.use(express.static('public'));

let io = socket(server);

io.on('connection', (socket) => {
	console.log('Connection Established with ID: ' + socket.id);

	// Handles chat event
	socket.on('receive', (data) => {
		io.sockets.emit('send', data)
	});
	// Handles typed events.
	socket.on('typed', (data) => {
		io.broadcast.emit('typing', data);
	});
});
var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(8000, function(){
    console.log('Running on localhost | PORT 8000');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('Connection Established with ID: ', socket.id);

    // Handle chat event
    socket.on('chat', (data) => {
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

});
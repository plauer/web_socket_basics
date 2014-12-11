//Require dependencies needed
var express = require('express');
var socket = require('socket.io');

//create express server instance
var app = express();

// Serve the client files from this directory
app.use(express.static(__dirname + "/client"));

//set our server to run on port 3000
var server = app.listen('3000');


// //tell our sockets to listen on the same port as our server
// var io = socket.listen(server);

// // SOCKET IO
// var active_connections = 0; //initialize active connections with 0

// io.sockets.on('connection', function (socket) {

//   active_connections++

//   //emit a user:connect event to client every time a connection is made
//   io.sockets.emit('user:connect', active_connections);

//   //emit a user:disconnect event to client  every time a connection is lost
//   socket.on('disconnect', function () {
//     active_connections--
//     io.sockets.emit('user:disconnect', active_connections);
//   });


// });

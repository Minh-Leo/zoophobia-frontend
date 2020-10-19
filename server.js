// const server = require('express')();
// const http = require('http').createServer(server);
// const io = require('socket.io')(http);
// import Deck from './client/src/helpers/deck';
// let players = [];

// io.on('connection', function (socket) {
//   console.log('A user connected: ' + socket.id);
//   players.push(socket.id);
//   io.emit('addPlayer', socket.id);
//   socket.on('dealCards', function () {
//     io.emit('dealCards');
//   });
//   socket.on('cardPlayed', function (gameObject, player) {
//     io.emit('cardPlayed', gameObject, player);
//   });

//   socket.on('disconnect', function () {
//     console.log('A user disconnected: ' + socket.id);
//     players = players.filter((player) => player !== socket.id);
//   });
// });

// http.listen(3000, function () {
//   console.log('Server Started!');
// });

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

io.on('connection', (socket) => {
  socket.emit('your id', socket.id);
  socket.on('send message', (body) => {
    io.emit('message', body);
  });
});

server.listen(8000, () => console.log('server is running on port 8000'));

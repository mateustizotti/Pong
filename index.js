const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Starting server at ${port}`));
app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New Connection: ' + socket.id);
}
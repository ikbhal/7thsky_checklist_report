
// express
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());
app.get('/ping', function(req, res){
    res.send("pong");
});

app.use(express.static("public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});
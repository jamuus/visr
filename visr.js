#!/usr/bin/env node

var readline = require('readline');

var http = require("http");
var url = require('url');
var fs = require('fs');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.htm');
});
app.use(express.static(__dirname));

var port = 8080;
http.listen(port, function() {
    console.log('server listening on http://0.0.0.0:' + port);
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    if (line.substring(0, 1) === '#') {
        parseLine(line.substring(1));
    } else {
        console.log(line);
    }
});


function parseLine(line) {
    io.sockets.emit('data', line);
}
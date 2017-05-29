/*global angular*/
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var router = express.Router();
var serveStatic = require('serve-static');



app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8081'
}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(serveStatic(require("path").join(__dirname, "/views"))); // Serves everything in the views directory
// Example: url.com/css/style.css serves views/css/style.css

// app.use(function(req, res) {
//     res.sendfile(__dirname + '/views/partials/home.html');
// });


var server = app.listen(8081, function() {
    console.log("Running")
});

var gracefulShutdown = function() {
    console.log('Shutting down');
    server.close(function() {
        console.log('Closed out remaining connections');
    });
}
process.on('SIGTERM', gracefulShutdown); // Server is killed
process.on('SIGINT', gracefulShutdown); // Ctrl-C is pressed in the terminal

// Create web server application
// Run node comments.js
// Open browser and type http://localhost:3000
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');
var comments = [];
var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png'
};

// Create web server
http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    if (pathname === '/') {
        // Read comments.html file
        fs.readFile('./comments.html', function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                // Set the response header
                response.writeHead(200, { 'Content-Type': 'text/html' });
                // Set the response content
                response.write(data.toString());
                // Send the response to client
                response.end();
            }
        });
    }
    else if (pathname === '/comments') {
        if (request.method === 'GET') {
            // Read comments.json file
            fs.readFile('./comments.json', function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    // Set the response header
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    // Set the response content
                    response.write(data.toString());
                    // Send the response to client
                    response.end();
                }
            });
        }}}).listen(3000);
var express = require('express');
var fs = require("fs");

var app = express();

var template = ' \
<!DOCTYPE html> <html> <body> \
	<script type="text/javascript"> \
		    var source = new EventSource("/events/"); \
		    source.onmessage = function(e) { \
		        document.body.innerHTML += e.data + "<br>"; \
		    }; \
</script> </body> </html>';

app.get('/', function (req, res) {
	res.send(template); // <- Return the static template above
});

app.get('/api/users', function (req, res) {
   fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8', 
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Methods': 'GET'
	});
      res.end( data );
   });
})

var clientId = 0;
var clients = {}; // <- Keep a map of attached clients

// Called once for each new client. Note, this response is left open!
app.get('/events/', function (req, res) {
	req.socket.setTimeout(Number.MAX_VALUE);
	res.writeHead(200, {
		'Content-Type': 'text/event-stream', // <- Important headers
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Methods': 'GET'
	});
	res.write('\n');
	(function (clientId) {
		clients[clientId] = res; // <- Add this client to those we consider "attached"
		req.on("close", function () {
			delete clients[clientId]
		}); // <- Remove this client when he disconnects
	})(++clientId)
});

var eventCounter=0;
setInterval(function () {
	var msg = eventCounter++;
	console.log("Clients: " + Object.keys(clients) + " <- " + msg);
	for (clientId in clients) {
		clients[clientId].write("data: Evento " + msg + "\n\n"); // <- Push a message to a single attached client
	};
}, 12000);

app.listen(process.env.PORT || 4202);
var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var fs = require("fs");

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var users=null;

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

function addHeader(res){
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8', 
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
	});
}

function getUsers(){
	if(users==null){
		let str=fs.readFileSync( __dirname + "/data/" + "users.json", 'utf8');
		users=JSON.parse(str);
	}
	return users;
}

app.delete('/api/users/:id', function(req,res){
	var id = req.params.id;
	console.log("delete id:",id);
	getUsers().data=getUsers().data.filter(function(user){ return user.id!=id;   });
	res.end();
})

app.put('/api/users', function(req,res){
	let user=req.body;
	console.log("put:",user);
	let itemIndex = getUsers()['data'].findIndex(item => item.id == user.id);
	getUsers()['data'][itemIndex]=user;
	res.json(user);
})

app.post('/api/users', function(req,res){
	let user=req.body;
	console.log("req.body:",req.body);
	getUsers().data.push(user);
	res.json(user);
})

app.get('/api/users', function (req, res) {
	let data=JSON.stringify(getUsers());
	//addHeader(res);
	res.end( data );
	console.log("end get users");
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
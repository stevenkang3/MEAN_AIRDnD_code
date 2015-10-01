var express = require('express');

var app = express();

io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var session = require('express-session');
app.use(session({secret: 'airdnd' }));

app.use(express.static((__dirname + '/public')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

// require('./server/config/socketRoutes.js')(io);

<<<<<<< HEAD
var server= app.listen(8000, function(){
=======
var server = app.listen(8000, function(){
>>>>>>> 1f4920ee34b26e932f9d402d95d13a716597cc7d
	console.log('Connected to port 8000');
})
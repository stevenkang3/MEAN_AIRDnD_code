

var express = require('express');
var app = express();
var server = app.listen(8000, function(){
	console.log('Connected to port 8000');
})

<<<<<<< HEAD
// Sockets
io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
=======
io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
>>>>>>> e9e34a5fd38ad7e9075bf37cc99b1844cf9055bb
app.use(bodyParser.json());

// Session
var session = require('express-session')
app.use(session({
  secret: 'encryption key',
  resave: false,
  saveUninitialized: true
}))


app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');
// SQL
// require('./server/config/sql.js');
// HTTP Routes`
require('./server/config/routes.js')(app);
<<<<<<< HEAD
// Socket Routes
// require('./server/config/socket.routes.js')(app);
=======

// require('./server/config/socketRoutes.js')(io);

<<<<<<< HEAD
var server= app.listen(8000, function(){
=======
var server = app.listen(8000, function(){
>>>>>>> 1f4920ee34b26e932f9d402d95d13a716597cc7d
	console.log('Connected to port 8000');
})
>>>>>>> e9e34a5fd38ad7e9075bf37cc99b1844cf9055bb

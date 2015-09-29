var express = require('express');

var app = express();

io = require('socket.io').listen(server)

var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static((__dirname + '/public')));


require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

require('./server/config/socketRoutes.js')(io);

app.listen(8000, function(){
	console.log('Connected to port 8000');
})
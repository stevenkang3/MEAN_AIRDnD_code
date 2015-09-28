var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static((__dirname + '/public')));


require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


app.listen(8000, function(){
	console.log('Connected to port 8000');
})
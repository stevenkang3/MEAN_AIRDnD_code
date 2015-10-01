var mongoose = require('mongoose');

var DinerSchema = new mongoose.Schema({
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	password: { type: String },
});

mongoose.model('Diner', DinerSchema);

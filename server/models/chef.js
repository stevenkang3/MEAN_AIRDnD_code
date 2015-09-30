var mongoose = require('mongoose');

var ChefSchema = new mongoose.Schema({
	name: { type: String },
	bio: { type: String },
	location: { type: String },
	events: { type: Array }
});

mongoose.model('Chef', ChefSchema);
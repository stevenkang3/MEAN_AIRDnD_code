var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef'},
	name: { type: String },
	location: { type: String },
	date: { type: Date, min: Date(Date.now) },
	price: { type: Number },
	guests: { type: Number },
	menu: { type: String },
	specialty: { type: String },
	attendees: { type: Array }
});

mongoose.model('Event', EventSchema);
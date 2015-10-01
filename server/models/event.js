var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef'},
	name: { type: String },
	location: { type: String },
	guest: Number,
	description: {type: String},
	url: {type: String},
	title: String,
	time: String,
	date: { type: Date, min: Date(Date.now) },
	price: { type: Number },
	duration: Number,
	guests: { type: Number },
	menu: { type: String },
	cuisine: { type: String},
	attendees: { type: Array },
	created_at: { type: Date, default: Date.now },
});

mongoose.model('Event', EventSchema);

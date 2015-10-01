var mongoose = require('mongoose');

var DinerSchema = new mongoose.Schema({
<<<<<<< HEAD
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	password: { type: String },
});

mongoose.model('Diner', DinerSchema);
=======
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    confirm: { type: String, trim: true }
});

mongoose.model('Diner', DinerSchema);
DinerSchema.path('first_name').required(true, "First name required!");
DinerSchema.path('last_name').required(true, "Last name required!");
DinerSchema.path('email').required(true, "Email required!");
DinerSchema.path('password').required(true, "Password required!");
DinerSchema.path('confirm').required(true, "Confirm password!");
>>>>>>> e9e34a5fd38ad7e9075bf37cc99b1844cf9055bb

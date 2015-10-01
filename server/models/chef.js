var mongoose = require('mongoose');

var ChefSchema = new mongoose.Schema({
<<<<<<< HEAD
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    confirm: { type: String, trim: true }
});

mongoose.model('Chef', ChefSchema);
ChefSchema.path('first_name').required(true, "First name required!");
ChefSchema.path('last_name').required(true, "Last name required!");
ChefSchema.path('email').required(true, "Email required!");
ChefSchema.path('password').required(true, "Password required!");
ChefSchema.path('confirm').required(true, "Confirm password!");
=======
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	password: { type: String },
	bio: { type: String },
	pic:  {type: String},
	location: { type: String },
	events: { type: Array },
	reviews: { type: Array },

});

mongoose.model('Chef', ChefSchema);
<<<<<<< HEAD
=======
>>>>>>> 1f4920ee34b26e932f9d402d95d13a716597cc7d
>>>>>>> e9e34a5fd38ad7e9075bf37cc99b1844cf9055bb

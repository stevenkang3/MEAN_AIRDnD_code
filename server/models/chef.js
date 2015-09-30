var mongoose = require('mongoose');

var ChefSchema = new mongoose.Schema({
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
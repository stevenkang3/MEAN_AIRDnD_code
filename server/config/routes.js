var events = require('../controllers/events.js');

module.exports = function(app){

	app.get('/events', events.getAll );
	app.post('/events', events.create );
	app.delete('events/:id', events.destroy );
};
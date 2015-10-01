var events = require('../controllers/events.js');
var users = require('../controllers/users.js');
var diner = require('../controllers/diners.js');

module.exports = function(app){
	// ==== EVENTS =====
	app.get('/events', events.getAll );
	app.get('/events/:id', events.getOne );
	app.post('/events', events.create );
	app.delete('events/:id', events.destroy );



	// ========= MAIN =========
	app.get('/apps', function(request, response) { users.index(request, response) }) /* Index */
	// app.post('/apps', function(request, response) { users.create(request, response);})	 /* Create */
	// app.delete('/apps/:id', function(request, response) {users.destroy(request, response);})
	app.get('/location', function(request, response) {users.location(request, response)})
	app.get('/cusine', function(request, response) {users.cusine(request, response)})
	app.get('/chef', function(request, response) {users.chef(request, response)})



	//======== Diners ==========
	app.post('/diner', function(request, response) { diner.create(request, response);})
	}

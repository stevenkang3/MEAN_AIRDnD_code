myApp.factory('EventFactory', function($http){
	var factory = {};

	factory.getAllEvents = function(event, callback){
		$http.get('/events').success(function(response){
			callback(response);
		})
	}

	factory.getOneEvent = function(event, callback){
		$http.get('/events/' + event._id).success(function(response){
			callback(response);
		})
	}

	factory.addEvent = function(newEvent, callback){
		$http.post('/events', newEvent).success(function(response){
			callback(response);
		})
	}

	return factory;
})
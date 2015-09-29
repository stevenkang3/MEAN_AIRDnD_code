var Event = mongoose.model('Event');

module.exports = (function(){
	return {
		getAll: function(request, response){
			Event.find({}, function(err, records){
				if(err) { return response.json(false); }
				else { return response.json(records); }
			})
		}.
		create: function(request, response){
			var newEvent = new Event({
					id: request.body.id,
					name: request.body.name,
					location: request.body.location,
					date: request.body.date,
					price: request.body.price,
					guests: request.body.guests,
					menu: request.body.menu,
					specialty: request.body.specialty
			})
			newEvent.save(function(err){
				if(err) { return response.json(false); }
				else { return response.json(true); }
			})
		}
		destroy: function(request, response){
			Event.remove({_id: request.params.id}, function(err){
				if(err) { return response.json(false); }
				else { return response.json(true); }
			})
		}
	}

})();
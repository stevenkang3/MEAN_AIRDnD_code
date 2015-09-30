var Chef = mongoose.model('Chef');

module.exports = (function(){
	return {
		getOne: function(request, response){
			Chef.findOne({_id: request.params.id}, function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		},
		create: function(request, response){
			var newChef = new Chef({
				name: request.body.name
			});
			newChef.save(function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		}
		update: function(request, response){
			Chef.findOneAndUpdate({_id:request.body._id}, $set:{bio: request.body.bio, location: request.body.location}, {new:true}, function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		}
	}
})
var Chef = mongoose.model('Chef');

module.exports = (function(){
	return {
		getOne: function(request, response){
			Chef.findOne({email: request.params.email}, function(err, record){
				if(err) { return response.json(false); }
				else if { 
					if(request.body.password != record.password)
						return response.json(false);
				}
				else { return response.json(record); }
			})
		},
		create: function(request, response){
			var newChef = new Chef({
				first_name: request.body.first
				name: request.body.name
			});
			newChef.save(function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		}
		update: function(request, response){
			Chef.findOneAndUpdate({_id:request.body._id}, {$set:{bio: request.body.bio, location: request.body.location}}, {new:true}, function(err, record){
				if(err) { return response.json(false); }
				else { return response.json(record); }
			})
		}
	}
})
myApp.controller('ChefController', function(ChefFactory, EventFactory, $location){
	var that = this;

	this.updateInfo = function(chefInfo){
		ChefFactory.updateInfo(chefInfo, function(response){

		})
	}

	this.addEvent = function(newEvent){
		EventFactory.addEvent(newEvent, function(response){
			if(response == true)
				$location.path('');
		})
	}
})
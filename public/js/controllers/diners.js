app.controller('DinerController', function(DinerFactory, $location){
	var that = this;

	// this.updateInfo = function(chefInfo){
	// 	ChefFactory.updateInfo(chefInfo, function(response){
  //
	// 	})
	// }

	this.addDiner = function(newDiner){
    console.log(newDiner);
		DinerFactory.addDiner(newDiner, function(response){
      console.log('con',response);
			if(response == true){
        console.log('true');
				$location.path('/main');
      }
      else{
        console.log('not sent');
      }
		})
	}

});

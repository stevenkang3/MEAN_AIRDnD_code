<<<<<<< HEAD
var myApp = angular.module('chefApp', ['ngRoute']);

        myApp.factory('CustomerFactory', function($http){
            var factory = {}
            var error = false;

            factory.getAll = function(callback){
                $http.get('/customers').success(function(response){
                    callback(response);
                })
            }

            factory.add = function(newCustomer, callback){
                $http.post('/customers', newCustomer).success(function(response){
                    if(response)
                        error = false;
                    else
                        error = true;
                    callback();
                })
            }

            factory.getError = function(){
                return error;
            }

            factory.destroy = function(customer, callback){
                $http.delete('/customers/' + customer._id).success(function(response){
                    callback(response);
                })
            }

            return factory;
        })
=======
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
>>>>>>> 1f4920ee34b26e932f9d402d95d13a716597cc7d

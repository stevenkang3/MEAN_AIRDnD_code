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
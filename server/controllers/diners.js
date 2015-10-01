var Diner = mongoose.model('Diner');
// var Order = mongoose.model('Order');
// var Product = mongoose.model('Product');
var errors_array = [];
module.exports = (function() {
	return {


create: function(request, response){
        console.log(request.body.first_name);
        var diner = new Diner();
        diner.first_name = request.body.first_name;
        diner.last_name = request.body.last_name;
        diner.email= request.body.email;
        diner.password = request.body.password;
        console.log(diner);
        diner.save(function(err){
          if(err){
            console.log('error');
            response.json(false);
          }
          else{
            console.log('true');
            return response.json(true); }
      })
  },

}
})();

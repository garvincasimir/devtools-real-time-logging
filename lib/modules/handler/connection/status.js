define(["when","modules/core","modules/optionsparser","modules/also"], 
function (when,sys,parser,also) {

	function status(msg,$state){
		var deferred = when.defer();
		//Setup visual indicator based on status
		deferred.resolve();
		return deferred.promise;
	}

	return {
		process: status
	}
	

});
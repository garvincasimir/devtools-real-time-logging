define(["when","modules/core","modules/optionsparser","modules/also"], 
function (when,sys,parser,also) {

	function init(msg,$state){
		var deferred = when.defer();
		var port = $state['port'];
		sys.discover(port.name)
			.then(function(result){
				return parser.parse(result);
			})
			.then(function(settings){
				return also.connection(settings);
			})
			.done(function(oFn,conn){
				$state['conn'] = conn;
				
				oFn.bind('onSql',function(sql){
					port.postMessage({
						target: 'display/sql',
						content: sql
					});
				});
				
				deferred.resolve({
					target: 'connection/status',
					state:'connected'
				});
			},
			function(reason){
				deferred.reject({
					target: 'connection/status',
					state: 'failed',
					reason: reason
				});
			});
		return deferred.promise;
	}

	return {
		process: init
	}
	

});
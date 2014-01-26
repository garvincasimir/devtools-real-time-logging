define(["when"],function (when) {
    function also(module){
    			return when.promise(function(resolve, reject, notify) {
							require([module], 
							function (m) {
								resolve(m);
							},
							function(e){
								reject(e);
							});
				});
			
     	}
     	
     function connection(settings){
     	return also("modules/connection/" + settings['library'])
				.then(function(conn){
					return conn.init(settings);
				});
     }
     
	function handle(msg,$state){
     	return also("modules/handler/" + msg['target'])
     			.then(function(handler){
					return handler.process(msg,$state);
				});
     }
	
	
	return {
		connection:connection,
		handle:handle
	}
 
});
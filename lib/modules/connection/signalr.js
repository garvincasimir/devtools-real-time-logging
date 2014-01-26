define(["signalr","when"],function (connection,when) {
	return conn = {
			init: function(settings){
					 var deferred = when.defer();
					 var url = settings['baseurl'] + settings['url'];
					 this.conn = connection(url, { useDefaultPath: false });
					 var proxy = this.conn.createHubProxy(settings['hub']);
					 proxy.on('bogusevent',function(){});	//must register at least one handler before start
						
					 this.conn.start()
					  .done(function(){
							deferred.resolve({
								bind: function(_event,fn){
									proxy.on(_event,fn);
								},
								conn: conn
							})
					  })
					  .fail(function(){
					  	deferred.reject("Unable to connect");
					  });
					 		  
					return deferred.promise;
			},
			stop: function(){
				this.conn.stop();
			},
			reconnect: function(){
				var deferred = when.defer();
				if(x.state==4){
					this.conn.start()
					  .done(function(){
							deferred.resolve();
					  })
					  .fail(function(){
					  	deferred.reject("Unable to reconnect");
					  });
				}
				else{
					deffered.resolve();
				}
				return deferred.promise;
			}
		
	}

});

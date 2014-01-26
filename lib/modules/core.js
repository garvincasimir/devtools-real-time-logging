define(["when","modules/also"],function(when,also) {
	
	function discover(tab){
			var deferred = when.defer();
			chrome.tabs.executeScript(parseInt(tab),{ file: '/lib/modules/autodiscover.js' },function(results){
				if(results)
					deferred.resolve(results[0]);
				else if(chrome.runtime.lastError)
					deferred.reject(chrome.runtime.lastError.message);
				else
					deferred.reject('No real time logging detected');
			});
			return deferred.promise;
	}
	
	
	function onConnect(listener){
		chrome.runtime.onConnect.addListener(listener);
	}
	
	function addPanel(title, icon,file){
		var deferred = when.defer();
		chrome.devtools.panels.create(title,icon,file, function(panel) {
			 deferred.resolve(panel); 
		});
		
		return deferred.promise;
	}
	
	function connect(){
		return chrome.runtime.connect({name: ''+ chrome.devtools.inspectedWindow.tabId + ''});
	}
	
	function bootstrapMessaging(port,$state){
		$state  =  $state || {}; //shared state. Think of it like a session scoped to each tab  
		$state['port'] = port;
		
		port.onMessage.addListener(function(msg){
			also.handle(msg,$state)
				.done(function(response){
					if(response){
						port.postMessage(response);
					}
				},function(errorResponse){
					port.postMessage(errorResponse.message);
				});
		});
	}
	return {
		chrome: chrome, //probaby should shim or put this in its own module 
		discover: discover,
		onConnect: onConnect,
		addPanel: addPanel,
		connect: connect,
		bootstrapMessaging: bootstrapMessaging
	}
});
require.config({
  baseUrl: '/lib'
});

require(["modules/core"], 
function (sys) {
	var port = sys.connect()
	
	var $state = {
		log: document.getElementById('log'),
		clear: document.getElementById('clear')
	}
	
	$state.clear.addEventListener("click", function(){
		$state.log.innerHTML = '';
	});

	//Setup hooks for communication with the background page
	sys.bootstrapMessaging(port,$state);
	
	//Auto discover connection details and connect
	port.postMessage({
		target: 'connection/init'
	});
		
});
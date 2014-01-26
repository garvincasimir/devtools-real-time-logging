define(["when","highlighter"], 
function (when,highlighter) {
	function sql(msg,$state){	
	 	return when.promise(function(resolve, reject, notify) {
   			var li = document.createElement('pre');
				li.innerHTML = highlighter.parse('sql',msg.content);
				$state['log'].appendChild(li);
				resolve();
		});
	};
	
	return {
		process: sql
	}	
		
});
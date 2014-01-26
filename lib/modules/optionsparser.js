define(["when"],function (when) {

    var parse = function(content){
    			return when.promise(function(resolve, reject, notify) {
	         		var options = content.split(";");
     				var settings = {};
					for(var o in options){
						var s = options[o].split('=');
						settings[s[0]] = s[1];
					}

    				resolve(settings);
				});
			
     	}

    return {
        parse : parse
    };
});
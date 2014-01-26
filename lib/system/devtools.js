require.config({
  baseUrl: '/lib'
});

require(["modules/core"], 
function (sys) {
	sys.addPanel('Real Time Log',null,'/lib/system/panels/main.html');
});
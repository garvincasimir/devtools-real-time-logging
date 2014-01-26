require.config({
  baseUrl: '/lib',
  shim: {
    'socketio': {
      exports: 'io'
    },
    'signalr':  {
            deps: ['jquery'],
            exports: 'jQuery.hubConnection'
        }
  },
  paths: {
    socketio: 'socket.io/socket.io'
  }
});


require(["modules/core"], 
function (sys) {
	sys.onConnect(function(port){
		sys.bootstrapMessaging(port);
	});
});

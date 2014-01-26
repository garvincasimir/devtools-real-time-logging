var autoDiscover = document.querySelector('meta[name="real-time-log"][content]');
if(autoDiscover){
		autoDiscover.content + ';baseurl=' + window.location.protocol + '//'+ window.location.host
}
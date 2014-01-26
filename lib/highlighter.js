define(["highlight/highlight.pack"],function (hljs) {
 
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "/lib/highlight/css/vs.css";
    document.getElementsByTagName("head")[0].appendChild(link);
 
 
 return {
 	parse: function(lang,str){
 		return hljs.highlight(lang, str).value;
 	},
 	parseAuto: function(str){
 		return hljs.highlightAuto(str).value;
 	}
 }
});
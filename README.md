Devtools real time logging
==========================

A chrome devtools extension which displays logging and debug information in a dedicated devtools tab. 
Great for apps such as SPAs which rely heavily on ajax to function.

![alt text](http://garvincasimir.files.wordpress.com/2014/01/real-time-plugin-e1390861476494.png "Plugin overview")

Install
==========================
This plugin is still in the Alpha stages but you can easily see how it works by doing the following

1. Clone the repo to somewhere on your local computer
2. Install the plugin by doing the following in your Google Chrome browser
  1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox: The menu's icon is three horizontal bars.. and select Extensions under the Tools menu to get to the same place).
  2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
  3. Click "Load unpacked extension".
  4. Select the directory containing the cloned repo
3. Once the plugin is installed 
  * visit the test azure website: [real-time-logging.azurewebsites.net](http://real-time-logging.azurewebsites.net/)
  * Or clone and run the project [EF6 Logger Sample](https://github.com/garvincasimir/EF6-Logger-Sample)
4. Open Chrome dev tools in the tab from step #3
5. Click on the "Real Time Log" button in the Chrome dev tools window
6. Click on the two buttons on the web page and you should see sql statements in the dev tools window.

Plugin dependencies
==========================
* [Require.js : Dependency injection](https://github.com/jrburke/requirejs)
* [When.js : Promises](https://github.com/cujojs/when)
* [Highlight.js : Syntax highlighting](http://highlightjs.org/)
* [Signalr : Real time communication](http://www.asp.net/signalr)
* [Jquery: Required by Signalr](http://jquery.com/)
* [Socket.io : Real time communication](http://socket.io/)




console.log("starting program");
var robot = require("kbm-robot");
var processWindows = require("node-process-windows");
const lineReader = require('line-reader');
processWindows.focusWindow("TrackMania");

robot.startJar();

function inittrack(){
	robot.sleep(1000).press("BACKSPACE").go();
}

function listenkey(){
	lineReader.eachLine('file.txt', function(line) {
	    keys = line.split(' ');
	    setTimeout(function () {
	    	
	    	keys = line.split(' ');
	    	console.log(keys);
		  	robot.press(keys[1]).sleep(keys[2]).release(keys[1]).go();//.then(robot.stopJar);
		}, keys[0])
		
	});

}
inittrack();
setTimeout(listenkey, 3600);
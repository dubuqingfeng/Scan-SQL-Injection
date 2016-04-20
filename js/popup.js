$('#startorpause').click(function(){
	// 获取状态
	if (localStorage['status'] == 'start') {
		Settings.sendMessageBack('pause', {}, function(response){
			console.log("test");
			window.close();
	    });
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("startscan");
	} else {
		Settings.sendMessageBack('start', {}, function(response){
			console.log("test");
			window.close();
	    });
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("pausescan");
	}
	
});
$('#result-list').click(function(){

});
$('#options').click(function(){
	var a=chrome.extension.getBackgroundPage();
	window.close();
	a.OpenExtensionUrl("../options.html");
});
$(document).ready(function() {
	if (localStorage['status'] == 'start') {
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("pausescan");
	} else {
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("startscan");
	}
});
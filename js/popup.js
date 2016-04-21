$('#startorpause').click(function(){
	// 获取状态
	if (localStorage['status'] == 'start') {
		Settings.sendMessageBack('pause', {}, function(response){
			closePopup();
	    });
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("startscan");
	} else {
		Settings.sendMessageBack('start', {}, function(response){
			closePopup();
	    });
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("pausescan");
	}
});
$('#result-list').click(function(){
	openOrFocusPage('result.html');
    closePopup();
});
$('#options').click(function(){
	openOrFocusPage('options.html');
    closePopup();
});
function closePopup() {
	window.close();
}

function openOrFocusPage(url) {
   var optionsUrl = chrome.extension.getURL(url); 
   chrome.tabs.query({}, function(extensionTabs) {
      var found = false;
      for (var i=0; i < extensionTabs.length; i++) {
         if (optionsUrl == extensionTabs[i].url) {
            found = true;
            console.log("tab id: " + extensionTabs[i].id);
            chrome.tabs.update(extensionTabs[i].id, {"selected": true});
         }
      }
      if (found == false) {
          chrome.tabs.create({url: url});
      }
   });
}

$(document).ready(function() {
	if (localStorage['status'] == 'start') {
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("pausescan");
	} else {
		document.getElementById('startorpause').innerHTML = chrome.i18n.getMessage("startscan");
	}
});
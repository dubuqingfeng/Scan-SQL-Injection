/**
 * 监听Message
 * 注意删除LocalStorage
 */
if (localStorage['status'] == undefined) {
	localStorage['status'] = 'start';
	console.log('testtest');
	chrome.extension.sendMessage({'action': 'start'},function(argument) {
	    console.log('start')
	});
}
chrome.extension.onMessage.addListener(function(request, _, sendResponse){
	console.log(request.action);
	var dicReturn;
	if (request.action == 'start') {
		localStorage['status'] = 'start';		chrome.webRequest.onBeforeRequest.addListener(beforeRequest, {urls: ['<all_urls>'],types:['main_frame']}, ['blocking'])
	}
	if (request.action == 'pause') {
		localStorage['status'] = 'pause';
	    chrome.webRequest.onBeforeRequest.removeListener(beforeRequest)
	}
	if (request.action == 'status') {
		var dicReturn = localStorage['status'];
		// 返回信息
		sendResponse(dicReturn);
	}
	if (request.action == 'list') {
		var strStatus = localStorage['status'];
		// var dicList = JSON.parse(strList)
		dicReturn = {'status': 200, 'data': strStatus}
		sendResponse(strStatus);
	}
});

function beforeRequest(details) {
  if (localStorage['status'] == 'start') {
    alert(details.url)
  }
}
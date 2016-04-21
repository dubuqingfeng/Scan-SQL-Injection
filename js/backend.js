/**
 * 监听Message
 * 注意删除LocalStorage
 */
if (localStorage['status'] == undefined) {
	localStorage['status'] = 'start';
	chrome.extension.sendMessage({'action': 'start'},function(argument) {
	    console.log('start')
	});
}
chrome.extension.onMessage.addListener(function(request, _, sendResponse){
	console.log(request.action);
	var dicReturn;
	if (request.action == 'start') {
		localStorage['status'] = 'start';		
		chrome.webRequest.onBeforeRequest.addListener(beforeRequest, {urls: ['<all_urls>'],types:['main_frame']}, ['blocking'])
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
		if(confirm("确定要添加扫描？"+ details.url))
		{
			var sqlmapIpPort="http://127.0.0.1:8775";
			var payload = {'url': details.url}

			console.log(payload);
			Connection('GET',sqlmapIpPort+'/task/new','',function(callback){
	            var response=JSON.parse(callback);
	            if(response.success){
	                Connection('POST',sqlmapIpPort+'/scan/'+response.taskid+'/start',JSON.stringify(payload),function(callback){
	                        var responseTemp=JSON.parse(callback);
	                        if(!responseTemp.success){
	                            alert('url send to sqlmapapi error');
	                        }
	                    }
	                )
	            }
	            else{
	                alert('sqlmapapi create task error');
	            }
	        }
		    )
		}
	}
}

function Connection(Sendtype,url,content,callback){ 
    if (window.XMLHttpRequest){ 
        var xmlhttp=new XMLHttpRequest(); 
    } 
    else{ 
        var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
    } 
    xmlhttp.onreadystatechange=function(){ 
        if(xmlhttp.readyState==4&&xmlhttp.status==200) 
        { 
            callback(xmlhttp.responseText); 
        } 
    } 
    xmlhttp.open(Sendtype,url,true); 
    xmlhttp.setRequestHeader("Content-Type","application/json"); 
    xmlhttp.send(content); 
} 
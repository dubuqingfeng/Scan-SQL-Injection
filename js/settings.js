var Settings = {
    load: function (callback) {
        _this = this;
        // 发送消息给background，请求已有数据
        this.sendMessageBack('list', {}, callback);
    },
    save: function (settings, callback) {
        _this = this;
        // 发送消息给background，请求已有数据
        this.sendMessageBack('start', {}, function(response){
            
        });
    },

    /**
     * 向background发送消息
     * @params strAction string 执行方法
     * @params dicData dict 数据字典
     * @params callback function 回调函数
     */
    sendMessageBack: function(strAction, dicData, callback){
        chrome.extension.sendMessage({'action': strAction, 'data': dicData},callback);
    },
};
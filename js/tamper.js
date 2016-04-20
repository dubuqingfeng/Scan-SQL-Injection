if (localStorage['status'] == 'start') {
  ruleEnable()
} else {
  ruleDisable()
}
// 全局启用
function ruleEnable() {
  ruleDisable()
  chrome.extension.sendMessage({'action': 'start'},function(argument) {
    console.log('start')
  });
}

// 全局禁用
function ruleDisable() {
  chrome.extension.sendMessage({'action': 'pause'},function(argument) {
    console.log('pause')
  });
}


var rule2 = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      css: ["video"]
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};
chrome.runtime.onInstalled.addListener(function(details) {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    console.log(rule2)
    chrome.declarativeContent.onPageChanged.addRules([rule2]);

  });
});


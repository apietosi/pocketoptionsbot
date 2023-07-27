console.log('injecting content script');
var s = document.createElement('script');
s.src = chrome.runtime.getURL('content_script.js');
s.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

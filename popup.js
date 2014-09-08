

// 1) This script executes
// 2) The popup is rendered
alert("Start Script");
chrome.tabs.executeScript({
  code: 'alert(window.getSelection().toString())'
});

var node = document.createElement('h2');
// alert(window.getSelection().toString());
node.innerHTML = 'Hello';
// alert(node);
document.getElementById("body").appendChild(node);
// alert(document);


chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  alert('hello ' + document.location.href);
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});
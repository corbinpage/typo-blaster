

// 1) This script executes
// 2) The popup is rendered


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  
  console.log("Sending Message...");

  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.text);

    var node = document.createElement('h2');
    node.innerHTML = response.text;
    document.getElementById("body").appendChild(node);

  });
});
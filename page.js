function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Typo Blaster message received...");
    var text = getSelectionText();
    sendResponse({text: text});
  }
);
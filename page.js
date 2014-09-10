function getSelectionText() {
    var text = "";


    
    if ($.Range.current()) {
        text = $.Range.current().toString();
        complete = $.Range.current().start('+20').range.end('-20').toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
        complete = document.selection.createRange().text;
    }    

    // if (window.getSelection) {
    //     text = window.getSelection().toString();
    // } else if (document.selection && document.selection.type != "Control") {
    //     text = document.selection.createRange().text;
    // }



    return [text, complete];
}

function getDomainAndURL() {

}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Typo Blaster message received...");
    var textArray = getSelectionText();
    sendResponse({text:           textArray[0],
                  complete_text:  textArray[1],
                  url:            document.URL,
                  domain:         window.location.host});
  }
);
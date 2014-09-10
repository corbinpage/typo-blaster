

// 1) This script executes
// 2) The popup is rendered

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  document.getElementById("cancel-button").addEventListener('click', cancelButtonClick);

  // Sends message to the page.js and gets highlights text
  console.log("Sending message to tab...");
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log("Received message from tab...");
    console.log(response);
    document.getElementById("submit-button").addEventListener('click', submitButtonClick);

    populateHighlightedText(response);
    
  });
});

function populateHighlightedText(response) {
  document.getElementById("typo-text").innerHTML = response.text;
}

function cancelButtonClick() {
  window.close();
}

function submitButtonClick() {
  sendDataToServer();
  successUI();
  window.close();
}

function successUI() {
  // Provide feedback to the user that the request was successful
}

function sendDataToServer() {
  console.log("Sending Data...")
  // load();
}

var clientId = '957189833738-4sfcgg8n0d6upcvohpuodfrramcl3rvt.apps.googleusercontent.com';
var apiKey = 'AIzaSyC1I2yx0xmk0E2dsBnmDLTQpAIdlhokpkw';
var scopes = 'https://www.googleapis.com/auth/plus.me';


function load() {
  gapi.client.setApiKey(apiKey);
  gapi.client.load('drive', 'v2', makeRequest);
}

function makeRequest() {
  var request = gapi.client.urlshortener.url.get({
    'shortUrl': 'http://goo.gl/fbsS'
  });
  request.execute(function(response) {
    appendResults(response.longUrl);
  });
}


function handleClientLoad() {
  // Step 2: Reference the API key
  console.log("1");
  gapi.client.setApiKey(apiKey);

  console.log("2")

  window.setTimeout(checkAuth,1);
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  console.log(authResult);

  // var authorizeButton = document.getElementById('authorize-button');
  // if (authResult && !authResult.error) {
    //   authorizeButton.style.visibility = 'hidden';
    //   makeApiCall();
    // } else {
      //   authorizeButton.style.visibility = '';
      //   authorizeButton.onclick = handleAuthClick;
      // }
    }
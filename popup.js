

// 1) This script executes
// 2) The popup is rendered

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  console.log("Sending Message...");

  // Sends message to the page.js and gets highlights text
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.text);

    changeUI(response);
    sendData();
  });
});

var clientId = '957189833738-4sfcgg8n0d6upcvohpuodfrramcl3rvt.apps.googleusercontent.com';
var apiKey = 'AIzaSyC1I2yx0xmk0E2dsBnmDLTQpAIdlhokpkw';
var scopes = 'https://www.googleapis.com/auth/plus.me';

function changeUI(response) {
  document.getElementById("typo-text").innerHTML = response.text;
}

function sendData() {
  console.log("Sending Data...")
  handleClientLoad();


}

function load() {
  gapi.client.setApiKey(apiKey);
  gapi.client.load('drive', 'v2');
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
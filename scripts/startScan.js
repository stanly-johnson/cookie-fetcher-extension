document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("scan");
  button.addEventListener("click", function() {
    document.getElementById("message").textContent = `Scanning the current site`;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "clicked_scan_button" }, function(response) {
        document.getElementById("message").textContent = `Finished Scanning`;
        response = JSON.stringify(response.data);
        document.getElementById("result").textContent = response;
      });
    });
  });
});

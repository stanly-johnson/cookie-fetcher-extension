chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_scan_button") {
    console.log("Privacy extension fetching cookies..");
    var domain = $("a[href^='http']")
      .eq(0)
      .attr("href");
    var cookies = document.cookie;
    sendResponse({ data: cookies, success: true });
  }
});

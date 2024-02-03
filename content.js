// Retrieve the toggle state from storage
chrome.storage.sync.get(["toggleState"], function (result) {
  var home = document.getElementById("primary");
  console.log(home);
  // Perform actions based on the stored toggle state
  if (result.toggleState) {
    home.style.display = "none";
  } else {
    home.style.display = "";
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var home = document.getElementById("primary");
  console.log(home);
  if (request.toggle) {
    // Show elements or perform any action when the toggle is ON

    home.style.display = "none";
  } else {
    // Hide elements or perform any action when the toggle is OFF
    home.style.display = "";
  }
});

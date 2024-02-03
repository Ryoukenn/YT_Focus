document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle switch element
  var toggleSwitch = document.getElementById("toggleSwitch");

  // Retrieve the toggle state from storage and update the switch
  chrome.storage.sync.get(["toggleState"], function (result) {
    toggleSwitch.checked = result.toggleSwitch || false;
  });

  // Add event listener for the toggle switch
  toggleSwitch.addEventListener("change", function () {
    // Save the toggle state to storage
    chrome.storage.sync.set({ toggleState: toggleSwitch.checked });

    // Get the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script to toggle elements on the webpage
      chrome.tabs.sendMessage(tabs[0].id, { toggle: toggleSwitch.checked });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle switch 1 element
  var toggleSwitch1 = document.getElementById("toggleSwitch1");
  // Add event listener for the toggle switch
  toggleSwitch1.addEventListener("change", function () {
    updateToggleState("toggleState1", toggleSwitch1.checked);
  });

  // Get the toggle switch 2 element
  var toggleSwitch2 = document.getElementById("toggleSwitch2");
  // Add event listener for the toggle switch
  toggleSwitch2.addEventListener("change", function () {
    updateToggleState("toggleState2", toggleSwitch2.checked);
  });

  // Get the toggle switch 3 element
  var toggleSwitch3 = document.getElementById("toggleSwitch3");
  // Add event listener for the toggle switch
  toggleSwitch3.addEventListener("change", function () {
    updateToggleState("toggleState3", toggleSwitch3.checked);
  });

  // Get the toggle switch 4 element
  var toggleSwitch4 = document.getElementById("toggleSwitch4");
  // Add event listener for the toggle switch
  toggleSwitch4.addEventListener("change", function () {
    updateToggleState("toggleState4", toggleSwitch4.checked);
  });

  // Retrieve the toggle states from storage and update the switches
  chrome.storage.sync.get(
    ["toggleState1", "toggleState2", "toggleState3", "toggleState4"],
    function (result) {
      toggleSwitch1.checked = result.toggleState1 || false;
      toggleSwitch2.checked = result.toggleState2 || false;
      toggleSwitch3.checked = result.toggleState3 || false;
      toggleSwitch4.checked = result.toggleState4 || false;
    }
  );
});

function updateToggleState(key, state) {
  // Save the toggle state to storage
  var update = {};
  update[key] = state;
  chrome.storage.sync.set(update);

  // Get the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Send a message to the content script to toggle elements on the webpage
    chrome.tabs.sendMessage(tabs[0].id, { key: key, toggle: state });
  });
}

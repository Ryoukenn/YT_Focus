(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    // the code to be called when the dom has loaded
    // #document has its nodes
    // Retrieve the toggle state from storage
    chrome.storage.sync.get(
      ["toggleState1", "toggleState2", "toggleState3", "toggleState4"],
      function (result) {
        var home =
          '<div id="primary" class="style-scope ytd-two-column-browse-results-renderer" style="display: none;"></div>';
        var shorts = document.querySelector('[title="Shorts"]');
        var side = document.querySelector('[id="secondary"]');
        var comment = document.querySelector(
          '[section-identifier="comment-item-section"]'
        );
        console.log("hello!!");
        console.log(home);
        console.log(shorts);
        console.log(side);
        console.log(comment);
        // Perform actions based on the stored toggle state
        if (result.toggleState1) {
          home.style.display = "none";
        } else {
          home.style.display = "block";
        }

        // Perform actions based on the stored toggle state
        if (result.toggleState2) {
          shorts.style.display = "none";
        } else {
          shorts.style.display = "block";
        }

        // Perform actions based on the stored toggle state
        if (result.toggleState3) {
          side.style.display = "none";
        } else {
          side.style.display = "block";
        }

        // Perform actions based on the stored toggle state
        if (result.toggleState4) {
          comment.style.display = "none";
        } else {
          comment.style.display = "block";
        }
      }
    );

    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      var home = document.querySelector(
        '[id="primary"][class="style-scope ytd-two-column-browse-results-renderer"]'
      );
      var shorts = document.querySelector('[title="Shorts"]');
      var side = document.querySelector('[id="secondary"]');
      var comment = document.querySelector(
        '[section-identifier="comment-item-section"]'
      );
      if (request.toggle) {
        // Show elements or perform any action when the toggle is ON
        console.log(request.key + " is ON");
        if (request.key === "toggleState1") {
          home.style.display = "none";
        }
        if (request.key === "toggleState2") {
          shorts.style.display = "none";
        }
        if (request.key === "toggleState3") {
          side.style.display = "none";
        }
        if (request.key === "toggleState4") {
          comment.style.display = "none";
        }
      } else {
        // Hide elements or perform any action when the toggle is OFF
        console.log(request.key + " is OFF");
        if (request.key === "toggleState1") {
          home.style.display = "block";
        }
        if (request.key === "toggleState2") {
          shorts.style.display = "block";
        }
        if (request.key === "toggleState3") {
          side.style.display = "block";
        }
        if (request.key === "toggleState4") {
          comment.style.display = "block";
        }
      }
    });
  }
})(window, document, undefined);

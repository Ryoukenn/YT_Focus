const observer = new MutationObserver(() => {
  // Your code to hide/show elements
  chrome.storage.sync.get(
    ["toggleState1", "toggleState2", "toggleState3", "toggleState4"],
    function (result) {
      console.log(window.location.pathname);

      // Check if the current URL matches the pattern for Toggle 2
      if (window.location.pathname.startsWith("/watch")) {
        // Code for Toggle 2
        console.log("Toggle 2 is enabled on this page");
        setTimeout(() => {
          var side = document.querySelector(
            '[id="secondary"][class="style-scope ytd-watch-flexy"]'
          );
          var comment = document.querySelector(
            '[id="comments"][class="style-scope ytd-watch-flexy"]'
          );
          console.log(side);
          console.log(comment);

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
        }, 200);
      } // Check if the current URL matches the pattern for Toggle 1
      else {
        // Code for Toggle 1
        console.log("Toggle 1 is enabled on this page");

        setTimeout(() => {
          var home = document.querySelector('[id="primary"]');

          var shorts = document.querySelector('[title="Shorts"]');
          console.log(home);
          console.log(shorts);

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
        }, 200);
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
});
observer.observe(document.body, { childList: true, subtree: true });

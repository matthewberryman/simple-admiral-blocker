(function() {
  const buttonTexts = ["continue without supporting us", "continue to site"];

  const clickButton = (button) => {
    setTimeout(() => {
      button.click();
    }, 10); // Delay for 10 milliseconds
  };

  const checkForButtons = () => {
    const buttons = document.querySelectorAll("button, a");
    for (const button of buttons) {
      const buttonText = button.textContent.trim().toLowerCase();
      if (buttonTexts.includes(buttonText)) {
        console.log("Simple Admiral Blocker: Found button with text:", buttonText);
        clickButton(button);
        break;
      }
    }
  };

  // Check for button on page load
  checkForButtons();

  // Improved MutationObserver for better DOM update handling
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        checkForButtons(); // Check for buttons on added nodes
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();

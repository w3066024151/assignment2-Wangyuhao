// Immediately Invoked Function Expression (IIFE) to avoid global scope pollution
(function () {
  var root = document.body;  // The element where 'dark' class is toggled
  var btn;                   // Theme toggle button

  // Function to enable or disable dark mode
  function setDark(on) {
    if (on) {
      if (!root.classList.contains('dark')) {
        root.classList.add('dark');
      }
      if (btn) { btn.textContent = 'Light Mode'; }
    } else {
      if (root.classList.contains('dark')) {
        root.classList.remove('dark');
      }
      if (btn) { btn.textContent = 'Dark Mode'; }
    }
  }

  // Set up the button click event
  function wire() {
    btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isDark = root.classList.contains('dark');
      // Toggle theme depending on the current state
      if (isDark) {
        setDark(false);
      } else {
        setDark(true);
      }
    });
  }

  // Initialize default mode and event listeners when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    setDark(false); // Default light colour
    wire();
  });
})();

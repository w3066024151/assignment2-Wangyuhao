(function () {
  var root = document.body;  // corresponds to body.dark in CSS
  var btn;

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

  function wire() {
    btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isDark = root.classList.contains('dark');
      if (isDark) {
        setDark(false);
      } else {
        setDark(true);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setDark(false); // Default light colour
    wire();
  });
})();

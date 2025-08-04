document.addEventListener('DOMContentLoaded', function () {

  var parts = window.location.pathname.split('/').filter(Boolean); 
  var base = parts.length > 0 ? '/' + parts[0] + '/' : '/';       

  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');

  function fetchText(path) {
    return fetch(base + path).then(function (res) { return res.text(); });
  }

  if (headerSlot) {
    fetchText('header.html')
      .then(function (html) {
        headerSlot.innerHTML = html;
        var btn = document.getElementById('theme-toggle');
        if (btn) {
          btn.addEventListener('click', function () {
            var b = document.body;
            var isDark = b.classList.contains('dark');
            if (isDark) {
              b.classList.remove('dark');
              btn.textContent = 'Dark Mode';
            } else {
              b.classList.add('dark');
              btn.textContent = 'Light Mode';
            }
          });
        }
      })
      .catch(function (e) { console.error('Load header failed:', e); });
  }

  if (footerSlot) {
    fetchText('footer.html')
      .then(function (html) { footerSlot.innerHTML = html; })
      .catch(function (e) { console.error('Load footer failed:', e); });
  }
});

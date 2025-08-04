document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('blog-list');
  if (!list) return;

  fetch('posts.json')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (posts) {
      posts.forEach(function (post) {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        var date = document.createElement('small');
        var p = document.createElement('p');

        h3.textContent = post.title;
        date.textContent = post.date;
        p.textContent = post.content;

        article.appendChild(h3);
        article.appendChild(date);
        article.appendChild(p);
        list.appendChild(article);
      });
    })
    .catch(function (err) {
      console.error('Load posts failed:', err);
      list.textContent = 'Failed to load blog posts.';
    });
});

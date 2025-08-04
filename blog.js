// Wait until the HTML DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the blog list container
  var list = document.getElementById('blog-list');
  if (!list) return; // Exit if container is missing

  // Fetch the posts.json file from the same directory
  fetch('posts.json')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json(); // Parse JSON content
    })
    .then(function (posts) {
      // Loop through each post in the array
      posts.forEach(function (post) {
        // Create HTML elements for the post
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        var date = document.createElement('small');
        var p = document.createElement('p');

        // Set text content for each element
        h3.textContent = post.title;
        date.textContent = post.date;
        p.textContent = post.content;

        // Append elements to the article
        article.appendChild(h3);
        article.appendChild(date);
        article.appendChild(p);
        // Append the article to the blog list container
        list.appendChild(article);
      });
    })
    .catch(function (err) {
      console.error('Load posts failed:', err);
      // Show a fallback message if posts cannot be loaded
      list.textContent = 'Failed to load blog posts.';
    });
});

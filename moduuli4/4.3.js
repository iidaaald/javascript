document.getElementById('searchForm').
    addEventListener('submit', function(event) {
      event.preventDefault();

      const query = document.getElementById('query').value;
      const url = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(url).then(response => response.json()).then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        data.forEach(tvShow => {
          const article = document.createElement('article');

          const h2 = document.createElement('h2');
          h2.textContent = tvShow.show.name;
          article.appendChild(h2);

          const a = document.createElement('a');
          a.href = tvShow.show.url;
          a.target = '_blank';
          a.textContent = 'Details';
          article.appendChild(a);

          const img = document.createElement('img');
          img.src = tvShow.show.image?.medium ||
              'https://via.placeholder.com/210x295?text=Not%20Found';
          img.alt = tvShow.show.name;
          article.appendChild(img);

          const div = document.createElement('div');
          div.innerHTML = tvShow.show.summary;
          article.appendChild(div);

          resultsDiv.appendChild(article);
        });
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    });

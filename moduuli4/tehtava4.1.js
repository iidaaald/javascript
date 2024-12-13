'use strict';

document.getElementById('searchForm').
    addEventListener('submit', function(event) {
      event.preventDefault();

      const query = document.getElementById('query').value;
      const url = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(url).then(response => response.json()).then(data => {
        console.log(data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    });

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const query = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(show => {
                console.log(`Name: ${show.show.name}`);
                console.log(`Type: ${show.show.type}`);
                console.log(`Language: ${show.show.language}`);
                console.log(`Genres: ${show.show.genres.join(', ')}`);
                console.log(`Status: ${show.show.status}`);
                console.log(`Runtime: ${show.show.runtime} minutes`);
                console.log(`Premiered: ${show.show.premiered}`);
                console.log(`Ended: ${show.show.ended}`);
                console.log(`Official Site: ${show.show.officialSite}`);
                console.log(`Schedule: ${show.show.schedule.days.join(', ')} at ${show.show.schedule.time}`);
                console.log(`Rating: ${show.show.rating.average}`);
                console.log(`Network: ${show.show.network ? show.show.network.name : 'N/A'}`);
                console.log(`IMDb: ${show.show.externals.imdb}`);
                console.log('-----------------------------');
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

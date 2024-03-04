

const movieGernes = document.querySelector('.movieGernes');

function buildGeners() {
    let selectOptions = "";

    for (let i = 0; i < allMovies.length; i++) {
        selectOptions += '<option value="' + i + '">' + allMovies[i].gerne + '</option>';
    }
    movieGernes.innerHTML = selectOptions;
}

buildGeners();

const movieList = document.querySelector('.movielist');

function listAllMovies(index) {
    let holdAllMovie = allMovies[index].movies;
    let buildMovies = ""; 

    for (let i = 0; i < allMovies[index].movies.length; i++) {
        buildMovies += ` 
        <li class="selected-movie" onclick="detailsItem(${index},${i})">
            <h4>${holdAllMovie[i].title}</h4>
            <img src="assets/img/${holdAllMovie[i].thumb}" alt="${holdAllMovie.desc}">
            <p class="description">On an initially routine flight, the protagonist ends up saving passengers through an emergency landing following a lightning strike.</p>
            <div class="row movie-stats m0 p0">
                <div class="col m0 p0">Date: <span>${holdAllMovie[i].date}</span> </div>
                <div class="col m0 p0">Length: <span>${holdAllMovie[i].length}</span> </div>
            </div>
        </li>`;
    }

    movieList.innerHTML = buildMovies;
}

listAllMovies(0);

const detailsDiv = document.querySelector('.movie-details-page');

function detailsItem(index, movie) {
    let holdAllMovie = allMovies[index].movies;
    let divMovie = `
        <h1>${holdAllMovie[movie].title} (${holdAllMovie[movie].year})</h1>
        <h4>Date: ${holdAllMovie[movie].date} | Length: ${holdAllMovie[movie].length}</h4>
        <div class="container">
        ${holdAllMovie[movie].trailer}
        </div>`;
    detailsDiv.innerHTML = divMovie;
}

detailsItem(0, 0);

movieGernes.addEventListener('change', function() {
    let selectedGenreIndex = this.value;
    listAllMovies(selectedGenreIndex);
});








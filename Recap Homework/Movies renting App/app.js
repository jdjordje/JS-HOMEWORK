/*
 Create a movie renting app
- There should be an array of movie names
- There should be an input and a search button
- When the person enters a name of a movie it should search the array
- If the name exists it should show an H1 element that says: "The movie can be rented" in green text
- If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
- The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

*/

const movie = document.querySelector(`#movie`);
const button = document.querySelector(`#btn`);

const movieDatabase = [
  "2001: A Space Odyssey",
  "The Godfather",
  "Citizen Kane",
  "Raiders of the Lost Ark",
  "Black Cat, White Cat",
  "Tetoviranje",
  "Pretty Village,Pretty Flame",
];

function movieRentalCheck(movieSearch) {
  for (let item of movieDatabase) {
    if (item.toUpperCase().includes(movieSearch.toUpperCase())) {
      document.querySelector(`.render`).innerHTML = `<h1>The movie can be rented</h1>`;
      document.querySelector(`.render`).style.color = `green`;
      break;
    } else {
      document.querySelector(`.render`).innerHTML = `<h1>The movie can't be rented</h1>`;
      document.querySelector(`.render`).style.color = `red`;
    }
  }
}

function checkForEmptyInput(movieSearch) {
  if (movieSearch.length < 3) {
    return false;
  }
  return true;
}

button.addEventListener(`click`, function () {
  let movieSearch = movie.value;

  if (!checkForEmptyInput(movieSearch)) {
    alert(`Please insert a movie name or a keyword`);
    return;
  }

  movieRentalCheck(movieSearch);

  movie.value = "";
});

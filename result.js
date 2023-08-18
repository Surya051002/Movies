
// const url = 'https://api.themoviedb.org/3/configuration';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODYwOGI1MDc2ODA3NDQ2YTgzZjEwZmIwOTUxYTdiMCIsInN1YiI6IjY0ZGViMzRmYjc3ZDRiMTEzZmM2MDczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7V0YafOpX6QqtO7sBFJtJONo9iJ47O4YBOEu7LtBqzI'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

document.addEventListener("DOMContentLoaded", function() {
    // Your fetch and manipulation code here
  const apiKey = "78608b5076807446a83f10fb0951a7b0";
const baseUrl = "https://api.themoviedb.org/3";
const endpoint = "/movie/popular";
const params = new URLSearchParams({
    api_key: apiKey
});

const url = `${baseUrl}${endpoint}?${params.toString()}`;


fetch(url)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Error fetching data: " + response.status);
        }
    })
    .then(popularMoviesData => {
        const movieListElement = document.getElementById("movieList");
        
        for (const movie of popularMoviesData.results) {
            console.log(`Image URL: https://image.tmdb.org/t/p/w300${movie.backdrop_path}`);
            console.log(movie);
            const listItem = document.createElement("li");
            const poster=movie.poster_path;
            console.log(poster);
            var imgElement = document.createElement("img");
            imgElement.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            imgElement.alt = `${movie.title} Poster`;
            imgElement.style.width = window.width; // Adjust the size as needed
            listItem.appendChild(imgElement);

            var text=document.createElement("li");
            text.innerHTML = `
                <strong>${movie.original_title}</strong><br>
                Release Date: ${movie.release_date}<br>
                Overview: ${movie.overview}
            `;
             movieListElement.appendChild(listItem);
             movieListElement.appendChild(text);
           
        }
    })
    .catch(error => {
        console.error(error);
    });
});
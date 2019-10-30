const request = new XMLHttpRequest();
const div = document.getElementById("root");

request.onreadystatechange = getAPI;

function getAPI() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const results = json.results;
        
        for (let i = 0; i < results.length; i++) {
            const img = document.createElement("img");
            div.appendChild(img);
            img.src = `https://image.tmdb.org/t/p/w500/${results[i].poster_path}`;
            const txt  = document.createElement("p");
            div.appendChild(txt);
            txt.textContent = results[i].original_title;
        }
    } else  {
        console.log(request.readyState, request.status);
    }

};

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=bde8033d3274c91b292a5293c6349052";

request.open("GET", url);
request.send(null);


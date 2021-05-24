import 'bootstrap/dist/css/bootstrap.min.css';
import mainHTML from "./main/index.html"
import cardHTML from "./card/card.html";
import movieHTML from "./movie/movie.html"
import { MainPage } from "./main/main";
import moviesList from "./movies-list.json";
import "./style/style.css";

localStorage.setItem("json", JSON.stringify(moviesList));
const json = JSON.parse(localStorage.getItem("json"));

const props = {
    "mainHTML": mainHTML,
    "cardHTML": cardHTML,
    "movieHTML": movieHTML,
    "json": json,
    "id": "content",
    "allMovies": "all-movies",
    "btnDelete": "btn-delete",
    "linkMoreClass": "more"
}

const main = new MainPage(props);

document.body.appendChild(main.render());
main.onClick();
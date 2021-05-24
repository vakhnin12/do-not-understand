import { MovieCard } from "../card/movie-card";

export class MainPage {
  constructor(props) {
    this.main = props.mainHTML;
    this.contentid = props.id;
    this.json = props.json;
    this.allMoviesLinkClass = props.allMovies;
    this.cardHTML = props.cardHTML;
    this.bthDelete = props.bthDelete;
    this.movieHTML = props.movieHTML;
    this.linkMore = props.linkMoreClass;
    this.props = props
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = this.main;

    return container.firstChild;
  }

  onClick() {
    const content = document.getElementById(this.contentid);

    document.addEventListener("click", (event) => {
      const allMovies = document.querySelector(`.${this.allMoviesLinkClass}`);
      const target = event.target;
      if (target === allMovies) {
        content.innerHTML = "";
        this.json.forEach((e) => {
          const movieCard = new MovieCard(this.props, e);
          movieCard.onClick() // вот здесь у меня включается обработка кликов и она отрабатывает столько раз сколько элементов в массиве "json", как можно вызвать ф-цию "onClick" вне этого блока кода чтоб она вызывалась только раз? 
          content.appendChild(movieCard.render());
        });
      }
    })
  }
}
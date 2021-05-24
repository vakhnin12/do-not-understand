import { renderTemplate } from "../utils";
import { Movie } from "../movie/movie"

export class MovieCard {
  constructor(props, e) {
    this.card = props.cardHTML;
    this.linkMore = props.linkMoreClass;
    this.jsonFilmCard = e;
    this.contentid = props.id;
    this.json = props.json;
    this.movieHTML = props.movieHTML;
    this.props = props;
  };

  onClick() {
    const content = document.getElementById(this.contentid)

    content.addEventListener("click", (event) => {
      const target = event.target;
      const linkMore = document.querySelector(`.${this.linkMore}`)
      if(target.className.includes(this.linkMore)){
        console.log("link more")
        content.innerHTML = "";

        const fullMovie = new Movie(this.props, this.json[event.target.id - 1])
        content.appendChild(fullMovie.render())
      }

      const buttonDelete = document.querySelector(".btn-delete");
      if(target.className.includes("btn-delete")){
        console.log("delete")
      };
      const buttonEdit = document.querySelector(".btn-edit");
      if(target === buttonEdit){
        console.log("edit")
      };
    })
  };

  render() {
    const movieCard = renderTemplate(this.card, this.jsonFilmCard)

    return movieCard;
  }
}


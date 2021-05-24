import {renderTemplate} from "../utils"

export class Movie {
  constructor(props, json) {
    this.movieHTML = props.movieHTML;
    this.json = json
  }

  render() {
    const movie = renderTemplate(this.movieHTML, this.json);

    return movie
  }
}
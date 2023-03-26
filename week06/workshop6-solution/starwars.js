import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true}
    }
    static styles = css`
    .crawl {
        margin: auto;
        text-align: center;
    }
    .crawl p {
        line-height: 5px;
        font-variant: small-caps;
    }`;

    static BASE_URL = "https://swapi.dev/api/films/";

    constructor() {
        super();
        this.film = "1";
        this._films = [1, 2, 3, 4, 5, 6]
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch () {
        fetch(StarWars.BASE_URL + this.film)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }

    _updateFilm(e) {
        this.film = e.target.value;
        this._data = undefined;
        this._fetch();  
    }

    render() { 
        if (this._data) {
            const crawl = this._data.opening_crawl.split('\r\n')
            return html`
            <form>
                <select name="film" @change=${this._updateFilm}>
                    ${this._films.map(film => {
                        console.log(film===this._film);
                        let selected = film == this.film;
                        return html`<option name=${film} ?selected=${selected}>${film}</option>`
                    }
                        )}
                </select>
            </form>
            
            <h2>${this._data.title}</h2>
            <p>Directed by: ${this._data.director}</p>
            
            <div class='crawl'>${crawl.map(line => html`<p>${line}</p>`)}</div>`;
        } else {
            return html`<p>Loading...${this.film}</p>`;
        }
    }

}

customElements.define('star-wars', StarWars);
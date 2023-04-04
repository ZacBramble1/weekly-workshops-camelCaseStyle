import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true},
        _characters: {state: true}
    }

    static styles = css`
    .characters {
        display: flex;
        flex-wrap: wrap; 
    }
    sw-character {
        border: 1px solid black;
        margin: 10px;
        padding: 5px;
    }
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
        this._characters = [];
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
            this._getPeople();
        });
    }

    _updateFilm(e) {
        this.film = e.target.value;
        this._data = undefined;
        this._fetch();  
    }

    /* get the data for the people in this film */
    _getPeople() {
        if (this._data) {
            this._characters = [];
            this._data.characters.map(person => {
                fetch(person)
                .then(response => response.json())
                .then(data => {
                    this._characters = this._characters.concat([data])
                })
            })
        }
    }

    showCharacter(e) {
        const target = this.shadowRoot.getElementById('character')
        const url = e.target.getAttribute('url');
        target.setAttribute('url', url);
    }

    render() {
        if (this._data) {
            const crawl = this._data.opening_crawl.split('\r\n')
            return html`
            <form>
                <select name="film" @change=${this._updateFilm}>
                    ${this._films.map(film => {
                        let selected = film == this.film;
                        return html`<option name=${film} ?selected=${selected}>${film}</option>`
                    }
                        )}
                </select>
            </form>
            
            <h2>${this._data.title}</h2>
            <p>Directed by: ${this._data.director}</p>

            <h3>Characters</h3>

            <div class="characters">
                ${this._characters.map(character => {
                    return html`<sw-character data="${JSON.stringify(character)}"></sw-character>`;
                })}
            </div>

            <div class='crawl'>${crawl.map(line => html`<p>${line}</p>`)}</div>`;
        } else {
            return html`<p>Loading...${this.film}</p>`;
        }
    }
}

customElements.define('star-wars', StarWars);


class StarWarsCharacter extends LitElement {
    static properties = {
        data: {},
        _data: {state: true}
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback(); 
        if (this.data) {
            this._data = JSON.parse(this.data);
        }
    }

    render() {
        if (this._data) {
            return html`<h2>${this._data.name}</h2>
            <p>Height: ${this._data.height}</p>
            `;
        }
    }
}

customElements.define('sw-character', StarWarsCharacter);
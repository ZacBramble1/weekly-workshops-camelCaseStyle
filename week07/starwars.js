import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement{
    static properties = {
        _film: {type:String, state:true}, 
        _data: {state: true}
    }
    static styles = css `
    div, form {
        font-family: monospace; 
    }
    .crawl-parent{
        text-align: center;
        perspective: 1000px;
    }
    .crawl-child{
        transform: rotateX(50deg);
    }
    .parent-container{
        display: grid; 
        grid-template-columns: repeat(5, 1fr);
    }
    `;
    static BASE_URL = "https://swapi.dev/api/films/";
    constructor() {
        super();
        this._film = "1";
    }
    connectedCallback(){
        super.connectedCallback();
        this.getData()
    }
    getData(){
        const url = StarWars.BASE_URL + `${this._film}`
        fetch(url)
            .then(response => response.json())
            .then(result => this._data = result)
    }
    updateFilm(event){
        this._film = event.target.value
        this.getData()
    }
    crawlTextTemplate(){
        return html`
        <div class="crawl-parent">
        <div class="crawl-child">
                ${this._data.opening_crawl.split(/\r?\n/).map(line => html `<div class="line">${line}</div>`)}
                </div>
        </div>
        `
    }
    formTemplate(){
        return html `
        <form method="get" @change=${this.updateFilm} >
            <label>Get details for film:
                <select name="films" id="film-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </label>
        </form>
        `
    }
    characterTemplate(){
        console.log(this._data.characters)
        return html `
            ${this._data.characters.map(character => html `<sw-character url="${character}"></sw-character>`)}
        `
    }
    render(){
        console.log("Rendering because film got update")
        if(this._data){
            return html `
                
                ${this.formTemplate()}
                <div>${this._data.title} <em>directed by</em> ${this._data.director}</div>
                ${this.crawlTextTemplate()}
                <div class="parent-container">${this.characterTemplate()}</div>
                `
        }else{
            return html `${this.formTemplate()}
            <p>Loading data...</p>`
        }
    }
}
customElements.define('star-wars', StarWars)
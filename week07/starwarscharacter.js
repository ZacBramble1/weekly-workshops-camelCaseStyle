import {html, css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class StarWarsCharacter extends LitElement{
    static properties = {
        url: {type:URL}, 
        _data:{state:true}
    }
    static styles = css `
        .container{
            width: max-content; 
            height: max-content;
            margin: 10px;
        }
    `
    constructor(){
        super()
    }
    connectedCallback(){
        super.connectedCallback()
        this.getData()
        
    }
    getData(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => this._data = data)
    }

    render(){
        if(this._data){
            return html `
        <div class="container">
            <div class="name">${this._data.name}</div>
            <div class="height">${this._data.height}</div>
            <div class="mass">${this._data.mass}</div>
        </div>
        `
        }else{
            return html `<div>Loading Character Information</div>`
        }
        
    }
}

customElements.define('sw-character', StarWarsCharacter)
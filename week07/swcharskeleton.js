import {html, css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class SkeletonSWCharacter extends LitElement{
    static properties = {
        url: {type:String},
        _data: {type:Object, state:true}
    }
    
    static styles = css `
    
    `
    connectedCallback(){
        super.connectedCallback()
        fetch(this.url)
            .then(response => response.json())
            .then(data => this._data = data)
    }
    render(){
        return html `
            <div>Name: ${this._data.name}</div>
            <div>Mass: ${this._data.mass}</div>

        `
    }
}

customElements.define('sw-skeleton', SkeletonSWCharacter)
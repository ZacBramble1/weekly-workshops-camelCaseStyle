import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Stars extends LitElement{
    static properties = {
        _spans: {type: Array, state:true}
    }
    static styles = css `span{
        width: 1px; 
        height: 1px;
        border-radius: 50%;
        background-color: white;
    }`
    loadSpan(){
        const rect = document.getElementById("page-header").getBoundingClientRect()
        const maxTop = rect.height;
        console.log(maxTop)
        const minTop = 0;
        const maxRight = rect.width;
        const minRight = 10; 
        for(let i = 0; i < 300; i++){
            this._spans.push(html`<span style="position:absolute;top:${Math.random() * (maxTop - minTop) + minTop}px;right:${Math.random() * (maxRight - minRight) + minRight}px"></span>`)
        }
        console.log(this._spans)
    }
    constructor(){
        super()
        this._spans = []
        this.loadSpan()
    }
    connectedCallback(){
        super.connectedCallback()
       
        window.addEventListener('resize', this.loaded);
    }
    loaded(){
        this.generateStarsTemplate()
    }
    render(){
        return html`
        ${this._spans}
        `
    }
}
customElements.define('stars-stars', Stars)
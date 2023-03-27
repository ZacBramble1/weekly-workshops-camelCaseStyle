import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Stars extends LitElement{
    
    static styles = css `span{
        width: 1px; 
        height: 1px;
        border-radius: 50%;
        background-color: white;
    }`
    generateStarsTemplate(){
        const rect = document.getElementById("page-header").getBoundingClientRect()
        let spans =[]
        const maxTop = rect.height;
        console.log(maxTop)
        const minTop = 0;
        const maxRight = rect.width;
        const minRight = 10; 
        for(let i = 0; i < 300; i++){
            spans.push(html`<span style="position:absolute;top:${Math.random() * (maxTop - minTop) + minTop}px;right:${Math.random() * (maxRight - minRight) + minRight}px"></span>`)
        }
        return spans
    }
    render(){
        return html`
        ${this.generateStarsTemplate()}
        `
    }
}
customElements.define('stars-stars', Stars)
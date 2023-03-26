import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement{
    static properties = {
        _year: {type: Date, state: true},
        _authorName: {type: String}
    };
    static styles = css `
    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #D0DAEE;
        color: white;
        text-align: center;
        color: black;
        font-family: monospace;
    }

    `;
    constructor(){
        super(); 
        this._year = new Date().getFullYear()
    }
    render(){
        return html `
            <footer>
                Copyright ${this._year} &copy; ${this._authorName}
            </footer>
        `;
    }
}
customElements.define('page-footer', PageFooter)
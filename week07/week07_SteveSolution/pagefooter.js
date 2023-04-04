import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static properties = {
        _year: {state: true}
    };

    static styles = css`
        :host { 
            display: block;
            font-family: sans-serif;
            width: 100%;
            border-top: 1px solid black;
        }
    `;

    constructor() {
        super();
        this._year = (new Date()).getFullYear();
    }

    render() {
        return html`
        <footer>
            Copyright ${this._year} &copy; Steve Cassidy 
        </footer>`
    }
}
customElements.define('page-footer', PageFooter);


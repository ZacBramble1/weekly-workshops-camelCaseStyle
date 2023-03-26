import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String},
        logo: {type: String}
    };

    static styles = css`
        :host { font-family: monospace; }
        header { background-color: pink; border-radius: 20px}
        img { 
            border: 1px solid black; 
            border-radius: 20px;
            width: 100px; height: 100px; 
        }
        header{
            text-align: center; 
        }
    `;

    render() {
        return html`
        <header>
        <img src=${this.logo} alt="company logo">
        <h1>${this.title}</h1>
        </header>`
    }
}
customElements.define('page-header', PageHeader);


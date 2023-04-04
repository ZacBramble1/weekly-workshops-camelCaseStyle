import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String},
        logo: {type: String}
    };

    static styles = css`
        :host { font-family: monospace; }
        header { background-color: black; border-radius: 20px, position: relative; border-radius: 10px}
        img { 
            width: 100px; height: 100px; 
        }
        img:hover{
            animation: shake 0.5s;
            animation-iteration-count: infinite;
        }
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        @keyframes fire-animation {
            /* You could think of as "step 1" */
            0% {
                border-top: 20px solid rgb(255,191,0);
            }
            /* You could think of as "step 2" */
            25% {
                border-top: 20px solid #E25822;
            }
            50%{
                border-top: 20px solid #E25822;
            }
            75%{
                border-top: 20px solid #E9791A;
            }
            100%{
                border-top: 20px solid #F19A11;
            }
          }
        #fire-triangle{
            width: 0; 
            height: 0; 
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            margin: 0 auto; 
            border-top: 20px solid rgb(255,191,0);
            animation: fire-animation 5s;
            animation-iteration-count: infinite;
        }
        header{
            text-align: center; 
            color: #FFE81F;
        }
    `;

    render() {
        return html`
        <header>
        <img src=${this.logo} alt="company logo">
        <div id="fire-triangle"></div>
        <h1>${this.title}</h1>
        </header>`
    }
}
customElements.define('page-header', PageHeader);


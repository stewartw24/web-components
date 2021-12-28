class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({ mode: 'open' });
        // const template = document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 10;
                }
            </style>
            <slot>Some default</slot>
            <span> (?)</span>
        `;
    }

    connectedCallback(){
        if(this.hasAttribute('tooltip-text')){
            console.log(this.getAttribute('tooltip-text'));
            this._tooltipText = this.getAttribute('tooltip-text');
        }
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip(){
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        // this._tooltipContainer.style.backgroundColor = 'black';
        // this._tooltipContainer.style.color = 'white';
        // this._tooltipContainer.style.position = 'absolute';
        // this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip(){
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define('my-tooltip', Tooltip);

function digital_root(n) {
    let myFunc = n => Number(n);
  
    let numArray = Array.from(String(n), myFunc);

    const reducer = (prevValue, curValue) => prevValue + curValue;

    while (numArray.toString().length > 1){
        numArray.reduce(reducer)
    }
  }
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "Some dummy tooltip text";
    this.attachShadow({ mode: "open" });
    // const template = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-weight: normal;
                    background-color: black;
                    color: white;
                    position: absolute;
                    top: 1.5rem;
                    left: 0.75rem;
                    z-index: 10;
                    padding: 0.15rem;
                    border-radius: 3px;
                    box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
                }

                :host(.important) {
                  background: var(--color-primary, #ccc);
                  padding: 0.15rem;
                }

                :host-context(p){
                  font-weight: bold;
                }

                .highlight {
                    background-color: red;
                }

                ::slotted(.highlight){
                    border-bottom: 1px dotted red;
                }

                .icon {
                    background: black;
                    color: white;
                    padding: .15rem .5rem;
                    text-align: center;
                    border-radius: 50%;
                }
            </style>
            <slot>Some default</slot>
            <span class="icon">?</span>
        `;
  }

  connectedCallback() {
    if (this.hasAttribute("tooltip-text")) {
      console.log(this.getAttribute("tooltip-text"));
      this._tooltipText = this.getAttribute("tooltip-text");
    }
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }

  static get observedAttributes(){
    return ['text'];
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    // this._tooltipContainer.style.backgroundColor = 'black';
    // this._tooltipContainer.style.color = 'white';
    // this._tooltipContainer.style.position = 'absolute';
    // this._tooltipContainer.style.zIndex = '10';
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define("my-tooltip", Tooltip);

function digital_root(n) {
  let myFunc = (n) => Number(n);

  let numArray = Array.from(String(n), myFunc);

  const reducer = (prevValue, curValue) => prevValue + curValue;

  while (numArray.toString().length > 1) {
    numArray.reduce(reducer);
  }
}

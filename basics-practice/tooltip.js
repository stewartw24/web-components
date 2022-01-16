class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipIcon;
    this._tooltipVisible = false;
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

                :host {
                  position: relative;
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
      // console.log(this.getAttribute("tooltip-text"));
      this._tooltipText = this.getAttribute("tooltip-text");
    }
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.addEventListener(
      "mouseenter",
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.addEventListener(
      "mouseleave",
      this._hideTooltip.bind(this)
    );
    // this.shadowRoot.appendChild(tooltipIcon);
    this._render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    if (name === "text") {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ["text"];
  }

  disconnectCallback() {
    // console.log("disconnected");
    //cleanup event listeners if the elements are removed
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
    this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip);
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector("div");
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement("div");
      tooltipContainer.textContent = this._tooltipText;
      // this._tooltipContainer.style.backgroundColor = 'black';
      // this._tooltipContainer.style.color = 'white';
      // this._tooltipContainer.style.position = 'absolute';
      // this._tooltipContainer.style.zIndex = '10';
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
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

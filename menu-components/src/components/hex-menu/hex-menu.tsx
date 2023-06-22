import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ws-hex-menu',
  styleUrl: './hex-menu.css',
  shadow: true,
})
export class HexMenu {
  @Prop({ reflect: true }) menuLink = [];
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  @Event({ bubbles: true, composed: true })
  wsTileSelected: EventEmitter<string>;

  @State() addMarg = '';
  @State() count = 0;

  onCloseDrawer() {
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  setShift(i: any) {
    let modI = i % 4;
    if (modI === 3) {
      this.count += 1;
    }
    if (this.opened && this.count % 2 !== 1) {
      this.count = 0;
      return (this.addMarg = 'marg-left');
    }
    if (!this.opened && this.count % 2 === 1) {
      return (this.addMarg = 'marg-left');
    }
  }

  onSelectTile(tile: string) {
    this.wsTileSelected.emit(tile);
  }

  render() {
    console.log(this.count);
    let content = this.menuLink.map((el, index) => [
      <style>{`
        .color-tile-${index} { 
          background-color: ${el.colour}; 
          --hex-transition: ''; 
          animation: disappear ${(this.menuLink.length - index) / 10}s ease; 
          visibility: hidden;
        } 
        :host([opened]) 
        .color-tile-${index} {
          --hex-transition: all .2s ease; 
          transition: var(--hex-transition); 
          animation: appearing ${index / 10}s ease; 
          visibility: visible;
        } 
        .color-tile-${index}::before {
          border-bottom: var(--hex-border) solid ${el.colour};
          bottom: 100%;
          width: 0px;
        } 
        .color-tile-${index}::after {
          border-top: var(--hex-border) solid ${el.colour};
          top: 100%;
          width: 0px;
        } 
        .color-tile-${index}:hover svg {
          fill: ${el.colour};
        } 
        .color-tile-${index}:hover line {
          fill: ${el.colour};
        }
        .color-tile-${index}:hover circle {
          fill: ${el.colour};
        }
        .color-tile-${index}:hover path {
          fill: ${el.colour};
        }`}</style>,
      <a
        class={!this.opened ? 'isDisabled' : ''}
        href={el.url}
        onClick={this.onSelectTile.bind(this, el.url)}
        target={el.newTab ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        <div
          class={`hexagon color-tile-${index} ${this.setShift(index)} ${
            this.count % 2
          }`}
          innerHTML={el.svg}
        />
      </a>,
    ]);
    return [
      <main class="hexagon-container">
        <div class="hexagon color-menu" onClick={this.onCloseDrawer.bind(this)}>
          <div class="hamburger" id="hamburger-6">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
        {content}
      </main>,
    ];
  }
}

import { Component, h, Prop, Method } from "@stencil/core";

@Component({
    tag: 'ws-top-drawer',
    styleUrl: './top-drawer.css',
    shadow: true
})
export class TopDrawer {
    @Prop({reflect: true}) menuTitle: string;
    @Prop({reflect: true, mutable: true}) opened: boolean;
    @Prop({reflect: true}) menuLink = []; 

    onCloseDrawer(){
        this.opened = false;
    }

    @Method()
    async open(){
        this.opened = true;
    }

    render(){
        let content = <ul>{this.menuLink.map(result => (
            <li><a href={result.url}><span class="highlight2">{result.name}</span></a></li>
            ))}</ul>;
        return (
            <div class="container">
                <header>
                    <h1><span class="highlight">{this.menuTitle}</span></h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <nav class="side-nav">
                    <slot />
                    {content}
                </nav>
            </div>
        )
    }
}
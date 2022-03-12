import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'ws-wonky-donkey',
    styleUrl: './wonky-donkey.css',
    shadow: true
})

export class WonkyDonkey {
    @Prop({reflect: true}) menuTitle: string;
    @Prop({reflect: true}) menuLink = [];
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer(){
            this.opened = false;
            console.log(this.opened)
    }

    open(){
        this.opened = true;
        console.log(this.opened)
        console.log('inside the open function')
        console.log(this);
    }

    render(){
        let content = <ul>{this.menuLink.map(result => (
            <li><a href={result.url} class="menu-options">{result.name}</a></li>
            ))}</ul>;
        return [
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>,
            <div class="container">
                <div class="buttons-wrap">
                    <div class="buttons">
                        <button id="close" onClick={this.onCloseDrawer.bind(this)}>
                            <i class="fas fa-times"></i>
                        </button>
                        <button id="open" onClick={this.open.bind(this)}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <slot />
            </div>,
            <nav>
                {content}
            </nav>
        ]
    }
}
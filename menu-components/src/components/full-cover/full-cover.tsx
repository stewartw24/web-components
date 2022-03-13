import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'ws-full-cover',
    styleUrl: './full-cover.css',
    shadow: true
})

export class FullCover{
    @Prop({reflect: true}) menuLink = [];
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer(){
        console.log(this.opened)
        if(this.opened){
            this.opened = false;
        }else{
            this.opened = true;
        }
    }

    render() {
        let content = <ul class="navigation__list">{this.menuLink.map((result, index) => (
            <li class="navigation__item"><a href={result.url} class="navigation__link"><span>{index +1}</span>{result.name}</a></li>
            ))}</ul>;
        return(
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"  />
            <label class="navigation__button" onClick={this.onCloseDrawer.bind(this)}>
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
                {content}
            </nav>
        </div>
        );
    };
};

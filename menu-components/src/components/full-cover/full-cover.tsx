import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'ws-full-cover',
    styleUrl: './full-cover.css',
    shadow: true
})

export class FullCover{
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
        return(
            <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"  />

            <label class="navigation__button" onClick={this.onCloseDrawer.bind(this)}>
                <span class="navigation__icon">&nbsp;</span>
                
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Natous</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book now</a></li>
                    </ul>
            </nav>
        </div>
        );
    };
};

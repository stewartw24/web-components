import { Component, Prop, h} from "@stencil/core";

@Component({
    tag: 'ws-side-buttons',
    styleUrl: './side-buttons.css',
    shadow: true
})

export class SideButtons{
    @Prop({reflect: true}) menuLink = []; 

    render(){
        let content = this.menuLink.map(el => (
            <div class="sidemenu-item sidemenu-item">
                <a href={el.url}>{el.name}</a>
                <img class="sidemenu-icon" src={el.imgSrc} />
            </div>
        )); 
        return(
            <div class="container">
                <nav class="sidemenu">
                    {content}
                </nav>
            </div>
        );
    }
}
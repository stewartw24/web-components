import { Component, h, Method, Prop, State } from "@stencil/core";

@Component({
    tag: 'ws-side-buttons',
    styleUrl: './side-buttons.css',
    shadow: true
})

export class SideButtons{

    render(){
        return(
            <div class="container">
                <nav class="sidemenu">
                    <div class="sidemenu-item sidemenu-item--home">
                        <a href="#">Home</a>
                        <img class="sidemenu-icon" src="https://img.icons8.com/material-rounded/96/000000/home-page.png" />
                    </div>
                    <div class="sidemenu-item sidemenu-item--projects">
                        <a href="#">Projects</a>
                        <img class="sidemenu-icon" src="https://img.icons8.com/material-sharp/96/000000/business-conference-female-speaker.png" />
                    </div>
                    <div class="sidemenu-item sidemenu-item--info">
                        <a href="#">Info</a>
                        <img class="sidemenu-icon" src="https://img.icons8.com/ios-filled/100/000000/info.png" />
                    </div>
                    <div class="sidemenu-item sidemenu-item--guides">
                        <a href="#">Guides</a>
                        <img class="sidemenu-icon" src="https://img.icons8.com/ios-filled/100/000000/informatics-book.png" />
                    </div>
                    <div class="sidemenu-item sidemenu-item--feedback">
                        <a href="#">Feedback</a>
                        <img class="sidemenu-icon" src="https://img.icons8.com/material-rounded/100/000000/feedback.png" />
                    </div>
                </nav>
            </div>
        );
    }
}
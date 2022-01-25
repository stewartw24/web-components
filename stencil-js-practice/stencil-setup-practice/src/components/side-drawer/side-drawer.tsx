// import { h } from '@stencil/core';
import { Component, h, Method, Prop, State } from '@stencil/core'
@Component({
    tag: 'ws-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @State() showContactInfo = false;

    @Prop({ reflect: true }) title: string;
    @Prop({ reflect: true, mutable: true }) opened: boolean;

    onCloseDrawer(){
        this.opened = false;
    }

    onContentChanged(content: string){
        this.showContactInfo = content === 'contact';
    }

    @Method() //@method make open() publicly available so it can be called in index.html
    open(){
        this.opened = true;
    }

    render(){
        let mainContent = <slot />;
        if(this.showContactInfo){
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>You can reach us via phone or email.</p>
                    <ul>
                        <li>Phone: 111555333</li>
                        <li>E-mail: <a href="mailto:test@test.com">test@test.com</a></li>
                    </ul>
                </div>
            );
        }
        
        return [ 
            <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
            <aside>
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChanged.bind(this, 'nav')}>Navigation</button>
                    <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChanged.bind(this, 'contact')}>Contact</button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        ];
    }
}
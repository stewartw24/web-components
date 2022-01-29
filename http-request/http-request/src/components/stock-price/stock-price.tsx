import { Component, h , State ,Element , Prop, Watch, Listen } from '@stencil/core';

import { AV_API_KEY } from '../../global/global'

@Component({
    tag: 'ws-stock-price',
    styleUrl: './stock-price.css',
    shadow: true
})
export class StockPrice {
    stockInput: HTMLInputElement;
    // initialStockSymbol: string;

    @Element() el: HTMLElement;

    @State() fetchedPrice: number;
    @State() stockUserInput: string;
    @State() stockInputValid = false;
    @State() error: string;
    @State() loading = false;

    //NOTE THE PROP WILL AUTOMATICALLY INTERPRET stock-symbol in the HTML and register it as stockSymbol below
    @Prop({mutable: true, reflect: true}) stockSymbol: string;

    //execute logic upon a change
    @Watch('stockSymbol')
    stockSymbolChanged(newValue: string, oldValue: string){
        if(newValue !== oldValue){
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice(newValue);
        }
    }

    //fired on every key stroke
    onUserInput(event: Event){
        this.stockUserInput = (event.target as HTMLInputElement).value;
        if(this.stockUserInput.trim() !== ''){
            this.stockInputValid = true;
        } else {
            this.stockInputValid = false;
        }
    }

    onFetchStockPrice(event: Event){
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value
        // const stockSymbol = this.stockInput.value; don't need to do it like this now that prop is mutable. can do it as per Below
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol); //dont need to do this because it will trigger the watcher
    }

    ///////////////LIFE CYCLE HOOKS (IN THE ORDER THAT THEY LOAD)

    componentWillLoad(){
        console.log('componentWillLoad');
        console.log(this.stockSymbol);
    }

    componentDidLoad(){
        console.log('componentDidLoad');
        if(this.stockSymbol){
            // this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol)
        }
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        // //this could be more easily managed with prop changes
        // if(this.stockSymbol !== this.initialStockSymbol){
        //     this.initialStockSymbol = this.stockSymbol;
        //     this.fetchStockPrice(this.stockSymbol);
        // }
    }

    ////disconnectedCallback() CHANGED IN STENCIL 3
    // componentDidUnload(){
    disconnectedCallback(){
        console.log('componentDidUnload');
    }

    /////////////////////////////////////////////////////////////

    //////Listener for other components
    //'body' @Listen to listen globally rather than just listen inside this component
    @Listen('wsSymbolSelected', { target: 'body' })
    onStockSymbolSelected(event: CustomEvent){
        console.log('stock symbol selected: ' + event.detail);
        if(event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    ///////////////////////////////////

    fetchStockPrice(stockSymbol: string){
        this.loading = true;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
        .then(res =>{
            return res.json();
        })
        .then(parsedRes => {
            console.log(parsedRes);
            if(!parsedRes['Global Quote']['05. price']){
                throw new Error('Invalid symbol');
            }
            this.error = null;
            this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
            this.loading = false;
        })
        .catch(err => {
            this.error = err.message;
            this.fetchStockPrice = null;
            this.loading = false;
        });
    }

    //hostData is a special reserved name
    hostData(){
        return {class: this.error ? 'hydrated error' : ''};
    }

    render(){
        let dataContent = <p>Please enter a symbol</p>;
        if(this.error){
            dataContent = <p>{this.error}</p>;
        }
        if(this.fetchedPrice){
            dataContent = <p>Price: ${this.fetchedPrice}</p>;
        }
        if(this.loading){
           dataContent = <ws-spinner></ws-spinner>
        }
        return [
            <form onSubmit={this.onFetchStockPrice.bind(this)}>
                <input 
                    id="stock-symbol" 
                    ref={el => this.stockInput = el} 
                    value={this.stockUserInput}
                    onInput={this.onUserInput.bind(this)}
                />
                <button type="submit" disabled={!this.stockInputValid || this.loading}>Fetch</button>
            </form>,
            <div>
                {dataContent}
            </div>
        ];
    }
}
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WsSpinner {
    }
    interface WsStockFinder {
    }
    interface WsStockPrice {
        "stockSymbol": string;
    }
}
declare global {
    interface HTMLWsSpinnerElement extends Components.WsSpinner, HTMLStencilElement {
    }
    var HTMLWsSpinnerElement: {
        prototype: HTMLWsSpinnerElement;
        new (): HTMLWsSpinnerElement;
    };
    interface HTMLWsStockFinderElement extends Components.WsStockFinder, HTMLStencilElement {
    }
    var HTMLWsStockFinderElement: {
        prototype: HTMLWsStockFinderElement;
        new (): HTMLWsStockFinderElement;
    };
    interface HTMLWsStockPriceElement extends Components.WsStockPrice, HTMLStencilElement {
    }
    var HTMLWsStockPriceElement: {
        prototype: HTMLWsStockPriceElement;
        new (): HTMLWsStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "ws-spinner": HTMLWsSpinnerElement;
        "ws-stock-finder": HTMLWsStockFinderElement;
        "ws-stock-price": HTMLWsStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface WsSpinner {
    }
    interface WsStockFinder {
        "onWsSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface WsStockPrice {
        "stockSymbol"?: string;
    }
    interface IntrinsicElements {
        "ws-spinner": WsSpinner;
        "ws-stock-finder": WsStockFinder;
        "ws-stock-price": WsStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ws-spinner": LocalJSX.WsSpinner & JSXBase.HTMLAttributes<HTMLWsSpinnerElement>;
            "ws-stock-finder": LocalJSX.WsStockFinder & JSXBase.HTMLAttributes<HTMLWsStockFinderElement>;
            "ws-stock-price": LocalJSX.WsStockPrice & JSXBase.HTMLAttributes<HTMLWsStockPriceElement>;
        }
    }
}

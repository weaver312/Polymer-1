import { html, PolymerElement } from "./node_modules/@polymer/polymer/polymer-element.js";
/**
 * `polymer-starter-kit`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class PolymerStarterKit extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-starter-kit'
      }
    };
  }

}

window.customElements.define('polymer-starter-kit', PolymerStarterKit);
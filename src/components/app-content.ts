import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import StyleGrid from './css-grid.css';
import StyleAppContent from './app-content.css';

@customElement('app-content')
export class AppContent extends LitElement {

  @property({type: String})     content = '';

  static get styles() {
    return [
      StyleGrid,
      StyleAppContent
    ];
  }

  render() {
    return html`
      <div class="grid-container grid-container--content">
        <div class="background"></div>
        <article>
          ${unsafeHTML(this.content)}
        </article>
      </div>
    `;
  }
}

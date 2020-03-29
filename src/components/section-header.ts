import {
  customElement,
  html,
  LitElement
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleHeader from './section-header.css';

@customElement('section-header')
export class SectionHeader extends LitElement {
  static get styles() {
    return [
      StyleGrid,
      StyleHeader
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--header">
        <header>
          <slot name="subheadline"></slot>
          <slot name="headline"></slot>
          <slot name="text"></slot>
        </header>
      </section>
    `;
  }
}

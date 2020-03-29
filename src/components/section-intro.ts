import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleIntro from './section-intro.css';

import './app-picture';

@customElement('section-intro')
export class SectionIntro extends LitElement {

  @property({type: Date})     _date = new Date();
  @property({type: Boolean})  _businessOpen = false;

  static get styles() {
    return [
      StyleGrid,
      StyleIntro
    ];
  }

  render() {
    return html`
      <section class="grid-container grid-container--intro">
        <header>
          <h2>Zahnärzte</h2>
          <h1>Dr. Karina Hilgner<br><span></span>Dr. Benjamin Vogt</h1>
        </header>
        <app-picture class="picture"></app-picture>
        <div class="times">
          <h4>Öffnungszeiten</h4>
          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>
          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>
        </div>
        <a class="phone" href="tel:+49221795014">
          <h4>Terminvereinbarungen</h4>
          <p>Rufen Sie einfach an:<br>
          <b class="number">0221 / 79 50 14</b></p>
        </a>
        <address class="address">
          <h4>Anschrift</h4>
          Zahnarztpraxis<br>
          Dr. Hilgner & Dr. Vogt<br>
          Weilerweg 33<br>
          50765 Köln
        </address>
      </section>
    `;
  }

  _checkOpen() {
    const day = this._date.getDay();
    const hours = this._date.getHours();
    const min = this._date.getMinutes();
    const sec = this._date.getSeconds();

    console.log(`${day}:${hours}:${min}:${sec}`);
    if (day === 6 || day === 7) {
      console.log('closed sa-so');
      return this._businessOpen = false;
    } else if (
      day >= 1 && day <= 4
      && hours >= 8 || hours < 20
    ) {
      console.log('open mo-do');
      return this._businessOpen = true;
    } else if (
      day === 5
      && hours >= 7 || hours < 19
    ) {
      console.log('open fr');
      return this._businessOpen = true;
    } else {
      console.log('closed ruhezeit');
      return this._businessOpen = false;
    }
  }
}

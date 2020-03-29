import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleContact from './section-contact.css';

@customElement('section-contact')
export class SectionContact extends LitElement {

  @property({type: Date})     _date = new Date();
  @property({type: Boolean})  _businessOpen = false;

  static get styles() {
    return [
      StyleGrid,
      StyleContact
    ];
  }

  render() {
    const businessOpen = this._businessOpen ? 'open' : 'closed';

    return html`
      <section class="grid-container grid-container--intro">
        <header>
          <h2>Wo & wie Sie uns finden</h2>
          <h1>Kontakt</h1>
        </header>
        <div class="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.747655486801!2d6.88280045121726!3d51.0208105794577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf31b57cf1f951%3A0x79dde2ee6e58c33!2sWeilerweg%2033%2C%2050765%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1585387018486!5m2!1sde!2sde"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0">
          </iframe>
        </div>
        <address class="address">
          <h4>Anschrift</h4>
          Zahnarztpraxis<br>
          Dr. Hilgner & Dr. Vogt<br>
          Weilerweg 33<br>
          50765 Köln
        </address>
        <a class="phone" href="tel:+49221795014">
          <h4>Terminvereinbarungen</h4>
          <p>Rufen Sie einfach an:<br>
          <b class="number">0221 / 79 50 14</b></p>
        </a>
        <div class="times ${businessOpen}">
          <h4>Öffnungszeiten</h4>
          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>
          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>
          <span class="time-state">${businessOpen}</span>
        </div>
      </section>
    `;
  }
}

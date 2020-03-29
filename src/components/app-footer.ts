import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleGrid from './css-grid.css';
import StyleAppFooter from './app-footer.css';

import { logo } from '../icons/app-icons';

@customElement('app-footer')
export class AppHeader extends LitElement {

  @property({type: String})     _page = 'index';

  static get styles() {
    return [
      StyleGrid,
      StyleAppFooter
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <footer class="grid-container grid-container--footer">
        <div class="logo">${logo}</div>
        <div class="copyright">
          <p>
            <a ?selected="${this._page === 'impressum'}" href="/impressum">Impressum</a> |
            <a ?selected="${this._page === 'datenschutz'}" href="/datenschutz">Datenschutz</a>
          </p>
          <p>Copyright &copy; 2020 Zahnärzte Dr. Hilgner & Dr. Vogt. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    `;
  }
}

import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
// This element is connected to the Redux store.
import { store, RootState } from '../store/store';

// These are the actions needed by this element.
import {
  updateMenuState
} from '../store/actions/app';

import StyleGrid from './css-grid.css';
import StyleAppHeader from './app-header.css';

import {
  logo,
  menuIcon,
  menuClose
} from '../icons/app-icons';

@customElement('app-header')
export class AppHeader extends connect(store)(LitElement) {
  @property({type: String})
  private _page = 'index';

  @property({type: Boolean})
  private _menuOpened = false;

  static get styles() {
    return [
      StyleGrid,
      StyleAppHeader
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header class="grid-container grid-container--header">
        <a href="/" class="logo">${logo}</a>

        <div class="menu">
          <button type="button" @click="${this._menuButtonClicked}">
            <span>${this._menuOpened ? 'Schließen' : 'Menu'}</span>${this._menuOpened ? menuClose : menuIcon}
          </button>
        </div>

        <!-- This gets hidden on a small screen-->
        <nav class="navigation"
             ?opened="${this._menuOpened}">
          <a ?selected="${this._page === 'ueber-uns'}" href="/ueber-uns">Über uns</a>
          <a ?selected="${this._page === 'leistungen'}" href="/leistungen">Leistungen</a>
          <a ?selected="${this._page === 'informationen'}" href="/informationen">Informationen</a>
          <a ?selected="${this._page === 'aktuelles'}" href="/aktuelles">Aktuelles</a>
          <a ?selected="${this._page === 'kontakt'}" href="/kontakt">Kontakt</a>
        </nav>
      </header>
    `;
  }

  private _menuButtonClicked() {
    store.dispatch(updateMenuState(this._menuOpened ? false : true));
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._menuOpened = state.app!.menuOpened;
  }
}

import 'regenerator-runtime/runtime';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import { LitElement, html, property, PropertyValues, customElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store, RootState } from './store/store';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateMenuState
} from './store/actions/app';

// These are css files for this component
import StyleComponent from './app.css';

// This are components to load
import './components/app-header';
import './components/app-footer';

@customElement('my-app')
export class MyApp extends connect(store)(LitElement) {
  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _page = '';

  @property({type: Boolean})
  private _snackbarOpened = false;

  @property({type: Boolean})
  private _offline = false;

  static get styles() {
    return [StyleComponent];
  }

  protected render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <!-- Header -->
      <app-header></app-header>
      <!-- Main content -->
      <main role="main" class="main-content">
        <view-index class="page" ?active="${this._page === 'index'}"></view-index>
        <view-about class="page" ?active="${this._page === 'ueber-uns'}"></view-about>
        <view-services class="page" ?active="${this._page === 'leistungen'}"></view-services>
        <view-informations class="page" ?active="${this._page === 'informationen'}"></view-informations>
        <view-news class="page" ?active="${this._page === 'aktuelles'}"></view-news>
        <view-contact class="page" ?active="${this._page === 'kontakt'}"></view-contact>
        <view-imprint class="page" ?active="${this._page === 'impressum'}"></view-imprint>
        <view-dataprotection class="page" ?active="${this._page === 'datenschutz'}"></view-dataprotection>
        <view-notfound class="page" ?active="${this._page === 'view404'}"></view-notfound>
      </main>
      <app-footer></app-footer>
      <!-- <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.
      </snack-bar> -->
    `;
  }

  protected firstUpdated() {
    installRouter((location) => {
      store.dispatch(navigate(decodeURIComponent(location.pathname)));
      window.scrollTo({ top: 0, left: 0 });
    });
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 768px)`,
        () => store.dispatch(updateMenuState(false)));
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('_page')) {
      const page = this._page.charAt(0).toUpperCase() + this._page.slice(1)
      const pageTitle = this.appTitle + ' - ' + page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._offline = state.app!.offline;
    this._snackbarOpened = state.app!.snackbarOpened;
  }
}

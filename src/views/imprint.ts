import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../components/section-header';
import '../components/app-content';

import Impressum from '../../markdown/impressum/impressum.md';

@customElement('view-imprint')
export class ViewImprint extends PageViewElement {
  protected render() {
    return html`
      <section-header>
        <h1 slot="headline">Impressum</h1>
      </section-header>
      <app-content id="impressum" content=${Impressum}></app-content>
    `
  }
}
